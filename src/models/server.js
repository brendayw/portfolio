const express = requiere('express')

class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT || 3000
        this.middleware()
        this.routes()
    }

    middleware() {
        this.app.use(express.static('public'))
    }

    routes() {
        //ruta de la api
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`API is listening in port ${this.port}`)
        })
    }   
}

module.exports = Server