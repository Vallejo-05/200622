//importar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações do usuário
const modelo = mongoose.Schema({
    data: Date,
    disciplina: String,
    tipo: String,
    entrega: String,
    instrucoes: String,
    usuario: String,
    status: { type: Number, default: 0 }
})

//gravar a estrutura na model atividades
const atividades = mongoose.model('atividades', modelo)

//exportar os dados para acesso externo
module.exports = atividades