const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ service: 'order-service', status: 'healthy' });
});

app.get('/', (_req, res) => {
  res.json({
    service: 'order-service',
    message: 'Order Service is running',
    orders: [
      { id: 1001, userId: 1, productId: 101, quantity: 1 },
      { id: 1002, userId: 2, productId: 102, quantity: 2 }
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Order Service listening on port ${PORT}`);
});
