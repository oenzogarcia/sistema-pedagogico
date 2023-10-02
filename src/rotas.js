const express = require('express');

const rotas = express()

const instrutores = require('./controladores/instrutores')
const aulas = require('./controladores/aulas')

rotas.get('/instrutores', instrutores.listarInstrutores)
rotas.get('/instrutores/:id', instrutores.listarInstrutoresPorId)
rotas.post('/instrutores', instrutores.cadastrarInstrutor)
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor)
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor)
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor)
rotas.post('/instrutores/:id/aulas', instrutores.cadastrarAulaParaInstrutor)
rotas.get('/aulas', aulas.listarAulas)
rotas.get('/aulas/:id', aulas.listarAulasPorId)
rotas.get('/instrutores/:id/aulas', instrutores.listarAulasDeUmInstrutor)

module.exports = rotas