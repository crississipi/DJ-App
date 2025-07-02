import express from 'express';

const app = express();
const PORT = 5000;

app.get('/api/hello', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
