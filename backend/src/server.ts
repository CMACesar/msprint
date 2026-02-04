import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { initDatabase } from './config/initDb';
import authRoutes from './routes/authRoutes';
import clienteRoutes from './routes/clienteRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/clientes', clienteRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

if (process.env.NODE_ENV !== 'production') {
  const start = async () => {
    try {
      await initDatabase();
      
      app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
      });
    } catch (error) {
      console.error('❌ Erro ao iniciar servidor:', error);
      process.exit(1);
    }
  };
  
  start();
}

export default app;
