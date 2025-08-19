import { Router } from 'express';
import { prisma } from '../index.js';
import { z } from 'zod';

const router = Router();

const FieldSchema = z.object({
  id: z.string(),
  type: z.enum(['text','email','textarea','select','radio','checkbox','file']),
  label: z.string(),
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  options: z.array(z.string()).optional(),
  validation: z.object({
    pattern: z.string().optional(),
    minLength: z.number().optional(),
    maxLength: z.number().optional()
  }).optional()
});

const FormSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(['draft','published']).optional().default('draft'),
  thankYouMessage: z.string().optional(),
  fields: z.array(FieldSchema)
});

// Create
router.post('/', async (req, res, next) => {
  try {
    const body = FormSchema.parse(req.body);
    const form = await prisma.form.create({ data: { ...body, fields: JSON.stringify(body.fields) } });
    res.status(201).json(form);
  } catch (e) { next(e); }
});

// List
router.get('/', async (_req, res, next) => {
  try {
    const forms = await prisma.form.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(forms);
  } catch (e) { next(e); }
});

// Read
router.get('/:id', async (req, res, next) => {
  try {
    const form = await prisma.form.findUnique({ where: { id: req.params.id } });
    if (!form) return res.status(404).json({ error: 'Not found' });
    res.json(form);
  } catch (e) { next(e); }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const body = FormSchema.partial().parse(req.body);
    const form = await prisma.form.update({
      where: { id: req.params.id },
      data: { ...body, fields: body.fields ? JSON.stringify(body.fields) : undefined }
    });
    res.json(form);
  } catch (e) { next(e); }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    await prisma.form.delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

// Duplicate
router.post('/:id/duplicate', async (req, res, next) => {
  try {
    const original = await prisma.form.findUnique({ where: { id: req.params.id } });
    if (!original) return res.status(404).json({ error: 'Not found' });
    const copy = await prisma.form.create({
      data: {
        title: `${original.title} (Copy)`,
        description: original.description ?? undefined,
        status: 'draft',
        thankYouMessage: original.thankYouMessage ?? undefined,
        fields: original.fields as any
      }
    });
    res.status(201).json(copy);
  } catch (e) { next(e); }
});

export default router;
