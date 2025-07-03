import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Serve frontend build
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Example API route
app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Prevent invalid /api/* requests from hitting the catch-all
app.use('/api', (_req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Catch-all for React Router (frontend)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

