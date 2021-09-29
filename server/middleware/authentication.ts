import { isTokenValid } from '../services/tokenManager';

const authentication = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')?.[1];
  
  if (!token || !isTokenValid(token)) {
    res.status(401).send('Invalid token');
    return;
  }

  next();
};

export default authentication;
