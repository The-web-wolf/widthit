import { Router } from 'express';
import timeout from '../middleware/timeout';
import { users } from '../data';
import { addToken, removeToken, getTokenOwner, generateToken } from '../services/tokenManager';

const router = Router();

// if password and email is correct returns new token
router.get('/api/login',timeout, (req, res) => {
  const {username, password} = req.query;

  const user = users.find((user) => (
    user.username === username &&
    user.password === password
  ));

  if (user) {
    const token = generateToken();

    addToken(token, user.id);

    res.status(200).json({
      id: user.id,
      email: user.email,
      token,
    })

    return;
  }

  res.status(401).send();
});

// deletes token
router.get('/api/logout', (req, res) => {
  const token = req.headers.authorization?.split(' ')?.[1];

  if (token) {
    removeToken(token);
    res.status(200).send();
    return;
  }

  res.status(401).send();
});

// return token owner info
router.get('/api/user', (req, res) => {
  const token = req.headers.authorization?.split(' ')?.[1];

  if (token) {
    const tokenOwnerId = getTokenOwner(token);

    if (tokenOwnerId) {
      const tokenOwner = users.find((user) => (
        user.id === tokenOwnerId
      ));
  
      res.status(200).json({
        id: tokenOwner.id,
        username: tokenOwner.username,
        email: tokenOwner.email,
      });

      return;
    }
  }

  res.status(401).send();
});

export default router;
