import {
  decodeToken,
} from '../services/jwtService';

export default async function (req, res, next) {
  try {
    const token = req.headers['x-auth-token'];
    if (!token) {
      return res.status(403).send({
        message: 'Access Denied',
      });
    }
    const userObj = await decodeToken(token);
    req.user = userObj;
    if (!req.user.isAdmin) {
      return res.status(403).send({
        message: 'Access Denied',
      });
    }
    next();
  } catch (error) {
    throw new Error(error);
  }
}