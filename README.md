# 📝 Projeto de Cadastro de Usuários

Este projeto é uma aplicação de cadastro de usuários, onde o backend foi construído com `json-server` para simular uma API REST e o frontend foi desenvolvido com `React`, utilizando bibliotecas como `axios`, `bootstrap`, `font-awesome`, `react-router-dom` para funcionalidades e estilos adicionais.

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - React
  - Axios (para chamadas HTTP)
  - Bootstrap (para estilos e layout)
  - Font Awesome (para ícones)
  - React Router Dom (para roteamento de páginas)

- **Backend:**
  - json-server (simula uma API REST)

## 📂 Estrutura do Projeto

```bash
cadastro-usuarios/
├── backend/
    └── db.json/
    └── package.json
├── frontend/
    ├── public/
        └── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── home/
    │   │   ├── template/
    │   │   ├── user/
    │   ├── main/
    │   │   ├── App.css
    │   │   ├── App.jsx
    │   ├── index.css
    │   ├── index.js
    ├── .gitignore
    ├── package.json
└── README.md
```

## 🔧 Instalação
1. Clone o repositório:
```sh
    git clone https://github.com/Neto-Pereira25/user_crud_with_json_server.git
    cd user_crud_with_json_server
```

2. Instale as dependências do projeto:
```sh
    npm install
```
## 🚀 Como Executar o Projeto
### Backend
1. Inicie o json-server para simular uma API REST com o arquivo db.json:
```sh
npx json-server --watch db.json --port 5000
```
### Frontend
2. Inicie o servidor de desenvolvimento do React:
```sh
npm start
```

## ⚙️ Funcionalidades
- Adicionar Usuário: Cria um novo cadastro de usuário.
- Editar Usuário: Atualiza os dados de um usuário existente.
- Remover Usuário: Exclui um usuário da base de dados.
- Listar Usuários: Exibe uma lista de todos os usuários cadastrados.

## 📦 Estilo e Ícones
- O estilo foi criado usando o Bootstrap, facilitando a responsividade e o layout.
- Ícones são fornecidos pelo Font Awesome para melhorar a interface do usuário (UI).

## ✉️ Chamadas HTTP com Axios
A comunicação com o backend é feita através da biblioteca axios para realizar as requisições HTTP (GET, POST, PUT, DELETE) para a API.

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir um pull request com melhorias ou correções.

Desenvolvido com ❤️ por Neto Pereira.
