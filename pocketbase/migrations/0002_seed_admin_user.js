migrate(
  (app) => {
    // Check if the users table exists before trying to query the collection
    // to avoid throwing 'sql: no rows in result set' which aborts the transaction
    if (!app.hasTable('users')) {
      return
    }

    let users
    try {
      users = app.findCollectionByNameOrId('users')
    } catch (err) {
      return
    }

    // Idempotent: skip if user already exists
    try {
      app.findAuthRecordByEmail('users', 'lilianajpdonatelli@gmail.com')
      return // already seeded
    } catch (_) {}

    const record = new Record(users)
    record.setEmail('lilianajpdonatelli@gmail.com')
    record.setPassword('Skip@Pass')
    record.setVerified(true)
    record.set('name', 'Admin')
    app.save(record)
  },
  (app) => {
    if (!app.hasTable('users')) {
      return
    }

    try {
      const record = app.findAuthRecordByEmail('users', 'lilianajpdonatelli@gmail.com')
      app.delete(record)
    } catch (_) {}
  },
)
