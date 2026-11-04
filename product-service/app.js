const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ service: 'product-service', status: 'healthy' });
});

app.get('/', (_req, res) => {
  res.json({
    service: 'product-service',
    message: 'Product Service is running',
    products: [
      { id: 101, name: 'Laptop', price: 799.99 },
      { id: 102, name: 'Keyboard', price: 49.99 }
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Product Service listening on port ${PORT}`);
});
