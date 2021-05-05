//TODO: look for a better logging solution
const path = require('path')

const logger = (filename, message) => {
    const tag = path.basename(filename).slice(0, -3)
    const timestamp = new Date(Date.now()).toLocaleString()
    console.log(`[${timestamp}] ${tag}: ${message}`)
}

module.exports = logger;