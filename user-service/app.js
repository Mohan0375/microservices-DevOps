const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ service: 'user-service', status: 'healthy' });
});

app.get('/', (_req, res) => {
  res.json({
    service: 'user-service',
    message: 'User Service is running',
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`User Service listening on port ${PORT}`);
});
