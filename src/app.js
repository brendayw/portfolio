require ('dotenv').config()
const Server = requiere('./models/server')

const server = new Server()

server.listen()
