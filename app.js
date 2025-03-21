// src/index.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname

  // 示例：处理 /login 接口
  if (path === '/login') {
    const params = Object.fromEntries(url.searchParams)
    const result = await login(params.phone, params.password)
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response('Not Found', { status: 404 })
}
