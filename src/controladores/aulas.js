let { aulas, idDaAula } = require('../bancodedados')



const listarAulas = (req, res) => {
    return res.json(aulas)
}

const listarAulasPorId = (req, res) => {
    const { id } = req.params

    const aula = aulas.find((aula) => {
        return aula.id === Number(id)
    })

    if (!aula) {
        return res.status(404).json({ mensagem: 'Aula não encontrada.' })
    }

    return res.status(200).json(aula)
}


module.exports = {
    listarAulas,
    listarAulasPorId
}