import { Router } from 'express';
import { prisma } from '../index.js';
const router = Router();
router.get('/:id/analytics', async (req, res, next) => {
    try {
        const formId = req.params.id;
        const all = await prisma.submission.findMany({
            where: { formId },
            orderBy: { createdAt: 'asc' }
        });
        // Aggregate by day in Node for SQLite simplicity
        const byDayMap = new Map();
        for (const s of all) {
            const d = new Date(s.createdAt);
            const key = d.toISOString().slice(0, 10);
            byDayMap.set(key, (byDayMap.get(key) || 0) + 1);
        }
        const byDay = [...byDayMap.entries()].map(([date, count]) => ({ date, count }));
        res.json({ total: all.length, byDay });
    }
    catch (e) {
        next(e);
    }
});
export default router;
