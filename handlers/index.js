const headers = { 'Content-Type': 'text/html' }
const handler = () => {
    return new Response('Hello, world!', { headers })
}
module.exports = handler
