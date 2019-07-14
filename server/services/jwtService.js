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

export const decodeToken = async (token) => {
  try {
    const data = await jwt.verify(token, process.env.JWTSECRET);
    if (!data) throw new Error('No data');
    return data;
  } catch (error) {
    return error;
  }
};