import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';

import formsRouter from './routes/forms.js';
import submissionsRouter from './routes/submissions.js';
import uploadRouter from './routes/upload.js';
import analyticsRouter from './routes/analytics.js';
import { errorHandler } from './middleware/errorHandler.js';
import { limiter } from './middleware/rateLimit.js';

export const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// rate limit (basic)
app.use(limiter);

// routes
app.use('/api/forms', formsRouter);
app.use('/api/forms', submissionsRouter); // /:id/submissions
app.use('/api/upload', uploadRouter);
app.use('/api/forms', analyticsRouter);   // /:id/analytics

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
