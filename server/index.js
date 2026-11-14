import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow requests during development and production
  methods: ['GET', 'POST', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API health route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    company: 'HanthanaLabs',
    tagline: 'Mechatronics & Electronics R&D',
    time: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/contact', contactRoutes);

// Static client files (for production build)
const clientDistPath = path.resolve(__dirname, '../client/dist');
app.use('/HanthanaLabs-web', express.static(clientDistPath));
app.use(express.static(clientDistPath));

// Fallback for SPA
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  // Prevent returning index.html with 200 for missing static assets (which breaks module script execution)
  if (/\.(js|css|svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$/i.test(req.path)) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('HanthanaLabs API server is running. Build client (npm run build) to serve the UI here.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 HanthanaLabs Server running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api/health`);
});
