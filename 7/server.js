const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => res.send('Hello, Express!'));

let products = [
  { id: 1, name: 'Pen', price: 10 },
  { id: 2, name: 'Notebook', price: 20 }
];

app.get('/products', (req, res) => res.json(products));

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ message: 'Name and price required' });
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
});

app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ message: 'Name and price required' });
  product.name = name;
  product.price = price;
  res.json(product);
});

app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  products.splice(index, 1);
  res.sendStatus(204);
});

app.listen(3000, () => console.log('http://localhost:3000'));
