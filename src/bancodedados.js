const bancodedados = {
    idDoInstrutor: 3,
    idDaAula: 3,
    instrutores: [
        {
            id: 1,
            nome: 'Bisky',
            email: 'bisky@email.com',
            status: true,
        },
        {
            id: 2,
            nome: 'Wing',
            email: 'wing@email.com',
            status: true,
        },
    ],
    aulas: [
        {
            id: 1,
            id_instrutor: 2,
            titulo: 'Ten e Zetsu',
            descricao: 'Controle e aprimoramente das habilidades Ten e Zetsu'
        },
        {
            id: 2,
            id_instrutor: 1,
            titulo: 'Ren e Hatsu',
            descricao: 'Controle e aprimoramente das habilidades Ren e Hatsu'
        }
    ],

}

module.exports = bancodedados