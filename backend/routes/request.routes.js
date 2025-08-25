import {Router} from 'express'
import { requireRole } from '../middleware/roles.js'
import { requireAuth } from '../middleware/auth.js'
import { createRequest, myRequest, listAll, setStatus } from '../controllers/request.Controller.js'
const router = Router()

router.post("/", requireAuth, createRequest)
router.get("/me", requireAuth, myRequest)
router.get("/", requireAuth, requireRole("admin"), listAll)
router.patch("/:id", requireAuth, requireRole("admin"), setStatus)

export default router