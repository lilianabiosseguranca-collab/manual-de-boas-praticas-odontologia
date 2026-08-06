routerAdd('POST', '/backend/v1/meta/capi', (e) => {
  const body = e.requestInfo().body || {}

  const pixelId = $secrets.get('META_PIXEL_ID') || ''
  const accessToken = $secrets.get('META_CAPI_ACCESS_TOKEN') || ''
  const caapiEnabled = $secrets.has('META_CAPI_ACCESS_TOKEN') && $secrets.has('META_PIXEL_ID')

  if (!caapiEnabled) {
    return e.json(200, { status: 'disabled', message: 'Meta CAPI not configured' })
  }

  const userAgent = e.request.header.get('User-Agent') || ''
  const clientIp = (e.request.remoteAddr || '').split(':')[0] || ''

  const payload = {
    data: [
      {
        event_name: body.eventName || 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        event_id:
          body.eventID ||
          (typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2) + Date.now().toString(36)),
        action_source: 'website',
        event_source_url: body.eventSourceUrl || '',
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: userAgent,
        },
      },
    ],
  }

  if (body.test_event_code) {
    payload.test_event_code = body.test_event_code
  }

  try {
    const res = $http.send({
      url: 'https://graph.facebook.com/v21.0/' + pixelId + '/events?access_token=' + accessToken,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      timeout: 10000,
    })

    let responseBody = {}
    try {
      responseBody = res.json || JSON.parse(res.body || '{}')
    } catch (_) {}

    return e.json(res.statusCode, responseBody)
  } catch (err) {
    $app.logger().error('Meta CAPI transport error', 'error', String(err))
    return e.json(200, { status: 'error', message: 'transport_error' })
  }
})
