# Sistema de gestão pedagógica

Este sistema foi criado para proporcionar uma melhor gestão da área pedagógica de escolas. 

Com ele, você será capaz de gerir com eficácia os instrutores de sua escola, bem como as aulas existentes no currículo dos cursos.

*Importante:* Este sistema foi criado de forma que esta API é ouvida na porta 3000. Portanto, todas as requisições devem ser enviadas através da mesma. 

Abaixo, estão listadas todas as funcionalidades de cada competência.

> Instrutores:
- Listar todos os instrutores;
- Listar um instrutor em específico através de sua ID;
- Cadastrar um novo instrutor;
- Atualizar informações de um instrutor;
- Atualizar o status de um instrutor;
- Excluir um instrutor;
- Cadastrar aulas para um instrutor;
- Listar aulas de um instrutor.

> Aulas:
- Listar todas as aulas;
- Listar uma aula em específico através de sua ID.


Veja a seguir como utilizar cada uma das funcionalidades:


*Importante:* Antes de enviar as requisições, você deve incializar o servidor (API) através do comando "npm run dev" no terminal. Além disso, se atente ao verbo utilizado para cada rota.


> Listar todos os instrutores (GET)


Sem nenhum conteúdo no corpo (body) da requisição, acesse: http://localhost:3000/instrutores

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/ab872ca1-540b-4bb0-99f5-83d8b8e7974f)

> Listar um instrutor em específico através de sua ID (GET)

Sem nenhum conteúdo no corpo (body) da requisição, acesse: http://localhost:3000/instrutores/id

Lembrando que o id é o número de identificação do instrutor. Portanto, ao buscar o instrutor de id 1, esta deve ser feita através da rota http://localhost:3000/instrutores/1

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/e1dab4df-9a6e-4e1d-ad5f-f52c2158f1fc)

> Cadastrar um instrutor (POST)

Acesse: http://localhost:3000/instrutores

Informe no corpo (body) da requisição, as informações referentes ao nome, e-mail e status (ativo ou inativo) do instrutor que deseja cadastrar.

Caso algum desses campos falte, o sistema não aceitará o cadastro, portanto, certifique-se de que tudo está devidamente preenchido conforme a imagem a seguir:

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/beee2754-99df-4f3a-b43a-69c6cf9f6568)

> Atualizar informações de um instrutor (PUT)

Acesse: http://localhost:3000/instrutores/id , sendo que o "id" deve ser substituído pelo número de ID do instrutor.

Informe no corpo (body) da requisição, as informações referentes ao nome, e-mail e status (ativo ou inativo) do instrutor que deseja atualizar.

Exemplo de atualização de informações do instrutor ID 3: 

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/37320dd1-3185-4d83-8698-667c0ac45948)


> Atualizar o status de um instrutor (PATCH)

Acesse: http://localhost:3000/instrutores/id/status , sendo que o "id" deve ser substituído pelo número de ID do instrutor.

Informe no corpo (body) da requisição, a informação true ou false que deseja alterar no status do instrutor.

Exemplo de atualização para o instrutor ID 3:

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/38aa8979-e962-4761-b0e5-348be23207b1)

> Excluir um instrutor (DELETE)

Acesse: http://localhost:3000/instrutores/id , sendo que o "id" deve ser substituído pelo número de ID do instrutor.

Com apenas isto, o instrutor informado na requisição será excluído da listagem de instrutores.

Exemplo de exclusão do instrutor ID 3:

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/6d0099af-0d08-43ab-99be-b19ad0d548aa)

> Cadastrar aulas para um instrutor (POST)

Acesse: http://localhost:3000/instrutores/id/aulas , sendo que o "id" deve ser substituído pelo número de ID do instrutor que você deseja cadastrar uma aula.

Informe no corpo (body) da requisição, as informações referentes aos campos "nome" e "descrição" da aula que deseja cadastrar.

Exemplo de cadastro para o instrutor ID 3: 

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/99187787-5f8a-40c0-bb06-67abac7bb451)

> Listar aulas de um instrutor (GET)

Acesse: http://localhost:3000/instrutores/id/aulas , sendo que o "id" deve ser substituído pelo número de ID do instrutor que você acessar as aulas.

Exemplo de listagem de aulas do instrutor ID 1: 

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/22a71678-fab5-453a-b188-5e015af08d59)


> Listar todas as aulas

Acesse http://localhost:3000/aulas 

O corpo (body) da requisição deve permanecer vazio:

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/b6daba08-8326-4494-ab43-ace7658c2785)

> Listar uma aula em específico através de sua ID

Acesse: http://localhost:3000/aulas/id , sendo que o "id" deve ser substituído pelo número de ID da aula que deseja buscar.

Exemplo de listagem de aula com ID 2:

![image](https://github.com/oenzogarcia/sistema-pedagogico/assets/138629004/241b9803-e5e1-4df5-98bc-0f5669b3b586)










