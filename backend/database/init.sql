-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  nome VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('ADMIN', 'GERENTE', 'TECNICO', 'VENDEDOR')),
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS clientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo VARCHAR(2) NOT NULL CHECK (tipo IN ('PF', 'PJ')),
  documento VARCHAR(20) UNIQUE NOT NULL,
  razao_social VARCHAR(255) NOT NULL,
  nome_fantasia VARCHAR(255),
  inscricao_estadual VARCHAR(20),
  isento BOOLEAN DEFAULT false,
  status VARCHAR(20) NOT NULL CHECK (status IN ('ATIVO', 'INATIVO', 'SUSPENSO')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Equipamentos
CREATE TABLE IF NOT EXISTS equipamentos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  numero_serie VARCHAR(100) UNIQUE NOT NULL,
  modelo VARCHAR(255) NOT NULL,
  fabricante VARCHAR(255) NOT NULL,
  categoria VARCHAR(50) NOT NULL CHECK (categoria IN ('IMPRESSORA', 'SCANNER', 'COPIADORA', 'MULTIFUNCIONAL')),
  data_aquisicao DATE NOT NULL,
  valor_aquisicao DECIMAL(10, 2) NOT NULL,
  depreciacao DECIMAL(10, 2) DEFAULT 0,
  status VARCHAR(20) NOT NULL CHECK (status IN ('DISPONIVEL', 'LOCADO', 'MANUTENCAO', 'VENDIDO', 'BAIXADO')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_clientes_documento ON clientes(documento);
CREATE INDEX idx_clientes_status ON clientes(status);
CREATE INDEX idx_equipamentos_numero_serie ON equipamentos(numero_serie);
CREATE INDEX idx_equipamentos_status ON equipamentos(status);
