import { Router } from 'express';
import { upload } from '../utils/upload.js';
const router = Router();
router.post('/', upload.single('file'), (req, res) => {
    const f = req.file;
    res.json({
        url: `/uploads/${f.filename}`,
        originalName: f.originalname,
        size: f.size,
        mime: f.mimetype
    });
});
export default router;
