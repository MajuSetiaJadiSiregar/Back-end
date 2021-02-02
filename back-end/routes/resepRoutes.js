import express from 'express';
import {createResep, readResep, searchResep, detailResep} from '../controllers/resepControllers.js';
import { uploadSingle } from '../middleware/multer.js';
const router = express.Router();

router.post(`/`,uploadSingle, createResep);
router.get(`/`, readResep);
router.get(`/:title`, searchResep);
router.get(`/:id`, detailResep);

export default router;