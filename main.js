'use strict'

const app = require('./server')
const PORT = process.env.PORT || 3000

async function startServer(){
    
    app.listen(PORT, () => console.log(`serving on port ${PORT}`))
}

startServer()