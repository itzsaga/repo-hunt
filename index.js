const Router = require('./router')
const index = require('./handlers/index')

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    try {
        const r = new Router()
        r.get('/', index)
        return r.route(request)
    } catch (e) {
        return new Response(e)
    }
}
