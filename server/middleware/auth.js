import {
  decodeToken,
} from '../services/jwtService';

export default async function (req, res, next) {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send({ message: 'Access Denied: No token provided' });
    const user = await decodeToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send({ error });
  }
}
