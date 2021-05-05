const app = require('./app')
const logger = require('./config/logger')

server = app.listen(process.env.PORT || 3000, () => {
    logger(__filename, 'Server staged')
})
