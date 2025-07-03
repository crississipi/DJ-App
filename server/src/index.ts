import express from 'express';
import path from 'path';
import apiRoutes from './routes/api';

const app = express();
const PORT = process.env.PORT || 5000;

const clientDist = path.join(__dirname, '../../client/dist');

// Serve static frontend
app.use(express.static(clientDist));

// API routes
app.use('/api', apiRoutes);

// Handle invalid /api routes
app.use('/api', (_req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Catch-all for React Router frontend
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
