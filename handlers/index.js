const headers = { 'Content-Type': 'text/html' }
const template = require('../templates/index')

const handler = async () => {
    try {
        return new Response(template(), { headers })
    } catch (err) {
        return new Response(err)
    }
}

module.exports = handler
