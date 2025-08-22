import bcrpyt from 'bcrypt'

export const hash = (pw) => bcrpyt.hash(pw, 12);
export const compare = (pw, hashVal) => bcrpyt.compare(pw, hashVal);