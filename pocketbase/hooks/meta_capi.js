routerAdd('POST', '/backend/v1/meta/capi', (e) => {
  const body = e.requestInfo().body || {}
  const pixelId = '1115990062814370'

  const token = $secrets.get('META_CAPI_TOKEN') || ''
  if (!token) {
    return e.json(200, { success: false, message: 'CAPI token not configured' })
  }

  const eventName = body.eventName || 'PageView'
  const eventID = body.eventID || ''
  const eventSourceUrl = body.eventSourceUrl || ''
  const testEventCode = body.testEventCode || ''

  const eventData = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventID,
    event_source_url: eventSourceUrl,
    action_source: 'website',
  }

  if (testEventCode) {
    eventData.test_event_code = testEventCode
  }

  if (body.customData) {
    eventData.custom_data = body.customData
  }

  const payload = { data: [eventData] }

  try {
    const res = $http.send({
      url: 'https://graph.facebook.com/v18.0/' + pixelId + '/events?access_token=' + token,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      timeout: 15,
    })

    if (res.statusCode >= 200 && res.statusCode < 300) {
      return e.json(200, { success: true })
    } else {
      $app.logger().error('CAPI request failed', 'status', res.statusCode, 'body', res.body)
      return e.json(res.statusCode, { success: false, error: 'CAPI request failed' })
    }
  } catch (err) {
    $app.logger().error('CAPI transport error', 'error', String(err))
    return e.json(500, { success: false, error: 'CAPI transport error' })
  }
})
