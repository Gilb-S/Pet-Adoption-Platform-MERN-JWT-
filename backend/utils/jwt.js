import jwt from 'jsonwebtoken'

export const signAccess = (payload) => jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.ACCESS_EXPIRES})

export const signRefresh = (payload) => jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.REFRESH_EXPIRES})

export const verifyAccess = (t) => jwt.verify(t, process.env.JWT_ACCESS_SECRET);
export const verifyRefresh = (t) => jwt.verify(t, process.env.JWT_REFRESH_SECRET)
