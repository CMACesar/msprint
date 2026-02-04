import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { pool } from '../config/database';

export const getClientes = async (req: AuthRequest, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM clientes ORDER BY razao_social');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
};

export const getClienteById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cliente' });
  }
};

export const createCliente = async (req: AuthRequest, res: Response) => {
  try {
    const { tipo, documento, razaoSocial, nomeFantasia, inscricaoEstadual, isento } = req.body;

    const result = await pool.query(
      'INSERT INTO clientes (tipo, documento, razao_social, nome_fantasia, inscricao_estadual, isento, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [tipo, documento, razaoSocial, nomeFantasia, inscricaoEstadual, isento, 'ATIVO']
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

export const updateCliente = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { tipo, documento, razaoSocial, nomeFantasia, inscricaoEstadual, isento, status } = req.body;

    const result = await pool.query(
      'UPDATE clientes SET tipo = $1, documento = $2, razao_social = $3, nome_fantasia = $4, inscricao_estadual = $5, isento = $6, status = $7, updated_at = NOW() WHERE id = $8 RETURNING *',
      [tipo, documento, razaoSocial, nomeFantasia, inscricaoEstadual, isento, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};
