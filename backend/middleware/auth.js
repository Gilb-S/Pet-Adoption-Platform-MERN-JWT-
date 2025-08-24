import { verifyAccess } from '../utils/jwt.js';

export function requireAuth(req, res, next){
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    
    if(!token) return res.status(401).json({message: "No access token"});

    try{
       const payload = verifyAccess(token);
       req.user = payload;
       next()
    } catch {
        return res.status(401).json({message: "invalid or expired token"});
    }
}