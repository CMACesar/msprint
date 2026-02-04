import { pool } from '../config/database';
import fs from 'fs';
import path from 'path';

export const initDatabase = async () => {
  try {
    const sqlPath = path.join(__dirname, '../../database/init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf-8');
    
    await pool.query(sql);
    console.log('✅ Banco de dados inicializado');
  } catch (error) {
    console.error('❌ Erro ao inicializar banco:', error);
  }
};
