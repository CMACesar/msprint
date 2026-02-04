# MSPrint ERP - Sistema Completo

ERP modular para empresas de tecnologia com assistência técnica, vendas e locação de equipamentos.

## Stack Tecnológica

- **Frontend**: React.js + TypeScript + Material-UI
- **Backend**: Node.js + Express + TypeScript
- **Banco de Dados**: PostgreSQL + Redis
- **Autenticação**: JWT
- **Containerização**: Docker

## Estrutura do Projeto

```
msprint/
├── backend/          # API Node.js
├── frontend/         # React App
└── docker-compose.yml
```

## Instalação

### 1. Instalar dependências

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### 2. Iniciar banco de dados

```bash
npm run docker:up
```

### 3. Criar tabelas no banco

```bash
# Conectar ao PostgreSQL e executar backend/database/init.sql
```

### 4. Iniciar aplicação

```bash
# Desenvolvimento (backend + frontend)
npm run dev

# Ou separadamente:
npm run dev:backend
npm run dev:frontend
```

## Endpoints da API

### Autenticação
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro

### Clientes (requer autenticação)
- `GET /api/clientes` - Listar clientes
- `GET /api/clientes/:id` - Buscar cliente
- `POST /api/clientes` - Criar cliente
- `PUT /api/clientes/:id` - Atualizar cliente

## Variáveis de Ambiente

Backend (.env):
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=msprint
DB_USER=msprint
DB_PASSWORD=msprint123
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
```

## Acesso

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- PostgreSQL: localhost:5432
- Redis: localhost:6379
