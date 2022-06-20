//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async () => {
    const atlas = await mongoose.connect('mongodb+srv://userAdmin:biel1512@cluster0.w8jhd.mongodb.net/fiap')
}

//exportar as informações para acesso externo
module.exports = conn
