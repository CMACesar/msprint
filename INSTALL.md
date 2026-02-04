# Instalação Manual (sem Docker)

## Opção 1: Instalar Docker Desktop
1. Baixe: https://www.docker.com/products/docker-desktop
2. Instale e reinicie o computador
3. Execute: `npm run docker:up`

## Opção 2: Instalar PostgreSQL e Redis localmente

### PostgreSQL
1. Baixe: https://www.postgresql.org/download/windows/
2. Instale com as configurações:
   - Porta: 5432
   - Usuário: postgres
   - Senha: (sua escolha)
3. Crie o banco:
```sql
CREATE DATABASE msprint;
CREATE USER msprint WITH PASSWORD 'msprint123';
GRANT ALL PRIVILEGES ON DATABASE msprint TO msprint;
```

### Redis
1. Baixe: https://github.com/microsoftarchive/redis/releases
2. Instale e inicie o serviço

## Iniciar aplicação
```bash
npm run dev
```

O banco será inicializado automaticamente na primeira execução.
