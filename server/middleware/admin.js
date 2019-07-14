import {
    decodeToken
} from '../services/jwtService';
export default async function (req, res, next) {
    try {
        const decoded = decodeToken(req.headers['x-auth-token'], data => {
            console.log(data);
        });
        console.log(decoded);
        // req.user from authorization
        console.log(JSON.stringify(req.headers['x-auth-token'], req.user));
        if (!req.user.isAdmin) return res.status(403).send({
            'message': 'Access Denied'
        });
        next();
    } catch (error) {
        throw new Error(error);
    }

}