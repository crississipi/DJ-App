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

// Catch-all for React Router
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
