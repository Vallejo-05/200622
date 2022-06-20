const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta

//importar p rota index.js
//const index = require('./routes/index')(app)

//importar o consign e configurar
const consign = require('consign')
consign().include('./routes').into(app)

//ligar o servidor
app.listen(porta)
console.log("Servidor iniciado em http://localhost:" + porta)