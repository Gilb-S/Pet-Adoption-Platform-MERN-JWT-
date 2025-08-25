import { Router } from 'express'
import User from '../models/User.model.js'
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roles.js';
const router = Router();
router.get("/", requireAuth, requireRole("admin"), async (req, res) => {
    const users = await User.find().select('name email role createdAt');
    res.status(200).json(users)
})

export default router