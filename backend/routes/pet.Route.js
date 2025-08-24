import { Router } from 'express'
import { listPets, getPets, createPet, updatePet, deletePet } from '../controllers/pet.Controller.js';
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roles.js'
import { upload } from '../middleware/upload.js'
const router = Router();

// public list rouuter
router.get("/", listPets);
router.get("/:id", getPets);

// protected router or admin routes
router.post("/", requireAuth, requireRole('admin'), upload.single('image'), createPet)
router.put("/:id", requireAuth, requireRole('admin'), upload.single('image'), updatePet)
router.delete('/:id', requireAuth, requireRole('admin'), deletePet)

export default router