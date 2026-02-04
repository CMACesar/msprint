import { Router } from 'express';
import { getClientes, getClienteById, createCliente, updateCliente } from '../controllers/clienteController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.use(authMiddleware);

router.get('/', getClientes);
router.get('/:id', getClienteById);
router.post('/', createCliente);
router.put('/:id', updateCliente);

export default router;
