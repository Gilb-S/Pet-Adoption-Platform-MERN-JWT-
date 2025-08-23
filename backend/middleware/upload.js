import multer from 'multer'
import path from 'path'
import fs from 'fs'

const dir = process.env.UPLOAD_DIR

if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})

const storage = multer.diskStorage({
    destination: dir, 
    filename: (_req, file, cb) => {
        const unique = Date.now()+ '-' + Math.round(Math.random()* 1e9)
        cb(null, unique + path.extname(file.originalname) )
    }
});

export const upload = multer({storage, limits: {fileSize: 2 * 1024 * 1024} }) // 2mb