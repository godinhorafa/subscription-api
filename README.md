# API de Gerenciamento de Assinaturas

Esta é uma API para gerenciamento de assinaturas, permitindo que os usuários criem, visualizem e gerenciem suas assinaturas de forma eficiente. A API também envia lembretes por e-mail antes da renovação das assinaturas.

## 🔋 Funcionalidades

👉 **Limitação Avançada de Taxa e Proteção contra Bots**: Com Arcjet, que ajuda a proteger toda a aplicação.

👉 **Modelagem de Banco de Dados**: Modelos e relacionamentos utilizando MongoDB e Mongoose.

👉 **Autenticação JWT**: Operações CRUD de usuários e gerenciamento de assinaturas.

👉 **Tratamento Global de Erros**: Validação de entrada e integração de middleware.

👉 **Mecanismos de Registro**: Para melhor depuração e monitoramento.

👉 **Lembretes por E-mail**: Automação de lembretes por e-mail inteligentes com workflows usando Upstash.

E muito mais, incluindo arquitetura de código e reutilização.

## Funcionalidades Adicionais

- **Gerenciamento de Usuários**: Cadastro, login e logout de usuários.
- **Gerenciamento de Assinaturas**: Criação, atualização, exclusão e visualização de assinaturas.
- **Lembretes de Renovação**: Envio de e-mails de lembrete antes da renovação das assinaturas.
- **Autenticação**: Proteção de rotas com JWT (JSON Web Tokens).

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT para autenticação
- Nodemailer para envio de e-mails
- Arcjet para proteção contra bots e gerenciamento de taxa de requisições
- Upstash para gerenciamento de workflows

## Pré-requisitos

Antes de começar, você precisará ter o Node.js e o MongoDB instalados em sua máquina.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu_usuario/subdub.git
   cd subdub
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env.development.local` ou `.env.production.local` na raiz do projeto e adicione suas variáveis de ambiente:
   ```
   PORT=3000
   DB_URI=mongodb://localhost:27017/subdub
   JWT_SECRET=seu_segredo
   JWT_EXPIRES_IN=1d
   EMAIL_PASSWORD=sua_senha_de_email
   ARCJET_KEY=sua_chave_arcjet
   QSTASH_TOKEN=sua_chave_qstash
   QSTASH_URL=sua_url_qstash
   ```

## Executando o Projeto

Para iniciar o servidor, use o seguinte comando:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

### Usuários

- `POST /api/v1/auth/sign-up`: Cria um novo usuário.
- `POST /api/v1/auth/sign-in`: Faz login de um usuário.
- `POST /api/v1/auth/sign-out`: Faz logout de um usuário.

### Assinaturas

- `POST /api/v1/subscriptions`: Cria uma nova assinatura.
- `GET /api/v1/subscriptions`: Obtém todas as assinaturas do usuário autenticado.
- `GET /api/v1/subscriptions/:id`: Obtém detalhes de uma assinatura específica.
- `PUT /api/v1/subscriptions/:id`: Atualiza uma assinatura específica.
- `DELETE /api/v1/subscriptions/:id`: Exclui uma assinatura específica.
