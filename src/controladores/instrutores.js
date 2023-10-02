let { instrutores, aulas, idDoInstrutor, idDaAula } = require('../bancodedados')


const listarInstrutores = (req, res) => {
    return res.json(instrutores)
}

const listarInstrutoresPorId = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' })
    }

    return res.status(200).json(instrutor)
}

const cadastrarInstrutor = (req, res) => {

    const { nome, email, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "Nome é necessário" })
    }

    if (!email) {
        return res.status(400).json({ mensagem: "Email é necessário" })
    }

    const instrutor = {
        id: idDoInstrutor++,
        nome,
        email,
        status: status ?? true,
        aulas: []
    }

    instrutores.push(instrutor)

    return res.status(201).json(instrutor)

}


const atualizarInstrutor = (req, res) => {

    const { id } = req.params

    const { nome, email, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "Nome é necessário" })
    }

    if (!email) {
        return res.status(400).json({ mensagem: "Email é necessário" })
    }


    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' })
    }

    instrutor.nome = nome
    instrutor.email = email
    instrutor.status = status

    return res.status(204).send()


}

const atualizarStatusInstrutor = (req, res) => {
    const { id } = req.params

    const { status } = req.body

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' })
    }

    instrutor.status = status

    return res.status(204).send()
}

const excluirInstrutor = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' })
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id)
    })

    return res.status(204).send()

}


const cadastrarAulaParaInstrutor = (req, res) => {

    const { id } = req.params
    const { titulo, descricao } = req.body

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' })
    }

    const aula = {
        id: idDaAula++,
        id_instrutor: Number(id),
        titulo,
        descricao
    }

    aulas.push(aula)

    return res.status(201).json(aula)

}

const listarAulasDeUmInstrutor = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' })
    }

    const aulasDeUmInstrutor = aulas.filter((aula) => {
        return aula.id_instrutor === Number(id)
    })

    return res.status(200).json(aulasDeUmInstrutor)
}


module.exports = {
    listarInstrutores,
    listarInstrutoresPorId,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor,
    cadastrarAulaParaInstrutor,
    listarAulasDeUmInstrutor
}