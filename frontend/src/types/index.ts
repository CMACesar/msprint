export interface Cliente {
  id: string;
  tipo: 'PF' | 'PJ';
  documento: string;
  razaoSocial: string;
  nomeFantasia?: string;
  inscricaoEstadual?: string;
  isento: boolean;
  status: 'ATIVO' | 'INATIVO' | 'SUSPENSO';
}

export interface Equipamento {
  id: string;
  numeroSerie: string;
  modelo: string;
  fabricante: string;
  categoria: 'IMPRESSORA' | 'SCANNER' | 'COPIADORA' | 'MULTIFUNCIONAL';
  dataAquisicao: string;
  valorAquisicao: number;
  depreciacao: number;
  status: 'DISPONIVEL' | 'LOCADO' | 'MANUTENCAO' | 'VENDIDO' | 'BAIXADO';
}

export interface Usuario {
  id: string;
  email: string;
  nome: string;
  role: 'ADMIN' | 'GERENTE' | 'TECNICO' | 'VENDEDOR';
}

export interface AuthResponse {
  token: string;
  usuario: Usuario;
}
