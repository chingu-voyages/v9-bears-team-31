import jwt from 'jsonwebtoken';

export const generateToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.JWTSECRET, {
      expiresIn: process.env.TOKENEXPIRESIN,
    });
    return token;
  } catch (error) {
    return error;
  }
};

export const decodeToken = async (token, callback) => {
  try {
    return await jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) return callback(err);
      return callback(false, decoded);
    });
  } catch (error) {
    return error;
  }
};
