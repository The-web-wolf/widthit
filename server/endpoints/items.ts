import {Router} from 'express';
import authentication from '../middleware/authentication';
import { getItems, updateItem } from '../services/itemManager';

const router = Router();

router.get('/api/items', authentication, (req, res) => {
  res.status(200).json({
    items: getItems(),
  });
});

router.post('/api/items', authentication, (req, res) => {
  const { id, name, role, email } = req.body;

  if (!id || !name || !role || !email) {
    res.status(400).send('mandatory parameter is missing');
    return;
  }
  
  updateItem({
    id,
    name,
    role,
    email,
    createdAt: new Date().toDateString(),
  })

  res.status(200).send();
});

export default router;
