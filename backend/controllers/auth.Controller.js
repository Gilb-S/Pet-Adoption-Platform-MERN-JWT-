import User from "../models/User.model.js";
import { signRefresh } from "../utils/jwt.js";
import { hash } from '../utils/password.js'

function setRefreshCookie(res, token){
    res.cookie("jid", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
}  
export const register = async (req, res) => {
   const {name, email, password} = req.body;
   try {
    if(!(name, email, password)) return res.status(400).json({message: "All fields are required"});
    // check if exist
    const exist = await User.findOne({email});
    if(exist)  return res.status(409).json({message: "Email Already used"});
    
    const user = await User.create({name, email, password: await hash(password)})
    const access = signRefresh({id: user._id, role: user.role, tokenVersion: user.tokenVersion})
    const refresh = signRefresh({id: user._id, tokenVersion: user.tokenVersion});
    setRefreshCookie(res, refresh)

    res.status(201).json({user: {id: user._id, name: user.name, role: user.role}, access});
   } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server error"})
   }
}


export const login = async (req, res) => {}

export const refresh = async (req, res) => {}

export const logout = async (req, res) => {} 