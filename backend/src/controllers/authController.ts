import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../config/database';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;

    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    const usuario = result.rows[0];

    if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    if (!usuario.ativo) {
      return res.status(403).json({ error: 'Usuário inativo' });
    }

    const token = jwt.sign(
      { id: usuario.id, role: usuario.role },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN as string }
    );

    res.json({ token, usuario: { id: usuario.id, email: usuario.email, nome: usuario.nome, role: usuario.role } });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, senha, nome, role } = req.body;

    const hashedPassword = await bcrypt.hash(senha, 10);

    const result = await pool.query(
      'INSERT INTO usuarios (email, senha, nome, role, ativo) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, nome, role',
      [email, hashedPassword, nome, role || 'VENDEDOR', true]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};
