
# Food Explorer

## Visão Geral

O Back-end é a espinha dorsal do nosso projeto, proporcionando a infraestrutura robusta para suportar todas as funcionalidades do Food Explorer. Desenvolvido com tecnologias modernas, este back-end utiliza o framework Express para lidar com requisições HTTP, o Knex para operações com o banco de dados, e o PM2 para gerenciamento de processos em produção

## Scripts

* Teste com Nodemon:

```bash
npm test
```

Executa o servidor usando o Nodemon para facilitar o desenvolvimento e a detecção de alterações no código.

* Iniciar em Produção com PM2:

```bash
npm start
```

Utiliza o PM2 para iniciar o servidor em um ambiente de produção, conforme configurado no arquivo ecosystem.config.js.


* Executar Migrações do Banco de Dados:

```bash
npm run migrate
```
Aplica as migrações mais recentes ao banco de dados usando o Knex.

## Configuração do Ambiente

O projeto utiliza um arquivo `.env` para armazenar variáveis de ambiente essenciais. Ao iniciar o projeto, é necessário criar um arquivo `.env.example` na raiz do diretório e preenchê-lo com as seguintes variáveis:


# Exemplo de .env
```env
AUTH_SECRET=seu_segredo_de_autenticacao
PORT_SERVER=3000
```


## Dependências Principais

- **Express (v4.18.2):** Framework web minimalista para Node.js, utilizado para construir a estrutura do servidor.
- **Knex (v3.0.1):** Construtor de consultas SQL para Node.js, utilizado para interação com o banco de dados.
- **PM2 (v5.3.0):** Gerenciador de processos para aplicações Node.js em produção.
- **Axios (v1.6.2):** Cliente HTTP baseado em promessas, utilizado para fazer requisições HTTP.
- **Cors (v2.8.5):** Middleware para Express que habilita o controle de acesso HTTP.
- **Dotenv (v16.3.1):** Módulo para carregar variáveis de ambiente de arquivos .env.
- **Jsonwebtoken (v9.0.2):** Implementação de JWT para autenticação.
- **Multer (v1.4.5-lts.1):** Middleware para manipulação de formulários multipart/data.

## Banco de Dados

* SQLite (v5.0.1): Sistema de gerenciamento de banco de dados relacional incorporado.
* SQLite3 (v5.1.6): Adaptador SQLite para Node.js.

## Desenvolvimento

* Nodemon (v3.0.1): Ferramenta que reinicia automaticamente o servidor após alterações no código durante o desenvolvimento.

## Licença

Este projeto é licenciado sob a Este projeto é licenciado sob a [Licença ISC](https://pt.wikipedia.org/wiki/Licen%C3%A7a_ISC).


Sinta-se à vontade para explorar, contribuir e aprimorar nosso back-end para garantir uma experiência completa no Food Explorer!
