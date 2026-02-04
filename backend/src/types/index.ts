export interface Cliente {
  id: string;
  tipo: 'PF' | 'PJ';
  documento: string;
  razaoSocial: string;
  nomeFantasia?: string;
  inscricaoEstadual?: string;
  isento: boolean;
  status: 'ATIVO' | 'INATIVO' | 'SUSPENSO';
  createdAt: Date;
  updatedAt: Date;
}

export interface Equipamento {
  id: string;
  numeroSerie: string;
  modelo: string;
  fabricante: string;
  categoria: 'IMPRESSORA' | 'SCANNER' | 'COPIADORA' | 'MULTIFUNCIONAL';
  dataAquisicao: Date;
  valorAquisicao: number;
  depreciacao: number;
  status: 'DISPONIVEL' | 'LOCADO' | 'MANUTENCAO' | 'VENDIDO' | 'BAIXADO';
  createdAt: Date;
  updatedAt: Date;
}

export interface Usuario {
  id: string;
  email: string;
  senha: string;
  nome: string;
  role: 'ADMIN' | 'GERENTE' | 'TECNICO' | 'VENDEDOR';
  ativo: boolean;
  createdAt: Date;
  updatedAt: Date;
}
