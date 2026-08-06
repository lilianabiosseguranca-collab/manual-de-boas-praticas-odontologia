migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('liliana_fotos')

    col.listRule = ''
    col.viewRule = ''
    col.createRule = ''
    col.updateRule = ''
    col.deleteRule = ''

    if (!col.fields.getByName('created')) {
      col.fields.add(new AutodateField({ name: 'created', onCreate: true, onUpdate: false }))
    }

    if (!col.fields.getByName('updated')) {
      col.fields.add(new AutodateField({ name: 'updated', onCreate: true, onUpdate: true }))
    }

    if (!col.fields.getByName('liliana_fundo')) {
      col.fields.add(
        new FileField({
          name: 'liliana_fundo',
          maxSelect: 1,
          maxSize: 10485760, // 10MB
          mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'],
        }),
      )
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('liliana_fotos')

    col.listRule = null
    col.viewRule = null
    col.createRule = null
    col.updateRule = null
    col.deleteRule = null

    const field = col.fields.getByName('liliana_fundo')
    if (field) {
      col.fields.removeById(field.id)
    }

    app.save(col)
  },
)
