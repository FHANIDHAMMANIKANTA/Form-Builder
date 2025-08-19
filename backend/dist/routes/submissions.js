import { Router } from 'express';
import { prisma } from '../index.js';
const router = Router();
// Public: create submission
router.post('/:id/submissions', async (req, res, next) => {
    try {
        const formId = req.params.id;
        const form = await prisma.form.findUnique({ where: { id: formId } });
        if (!form)
            return res.status(404).json({ error: 'Form not found' });
        const sub = await prisma.submission.create({
            data: {
                formId,
                data: req.body?.data ?? {},
                files: req.body?.files ?? []
            }
        });
        await prisma.form.update({
            where: { id: formId },
            data: { submissionCount: { increment: 1 } }
        });
        res.status(201).json({ ok: true, submissionId: sub.id });
    }
    catch (e) {
        next(e);
    }
});
// Admin: list submissions for a form
router.get('/:id/submissions', async (req, res, next) => {
    try {
        const items = await prisma.submission.findMany({
            where: { formId: req.params.id },
            orderBy: { createdAt: 'desc' }
        });
        res.json(items);
    }
    catch (e) {
        next(e);
    }
});
export default router;
