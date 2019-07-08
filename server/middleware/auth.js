const jwt = require('jsonwebtoken');

export default function(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send({'message': 'Access Denied: No token provided'});

    try {
        const decoded  = jwt.verify(token, process.env.JWTSECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send({ error });
    }
}