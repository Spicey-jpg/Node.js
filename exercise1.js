import express from 'express';
const app = express();
const PORT = 3000;
// Middleware to parse JSON
app.use(express.json());
// Routes for 'products'
app.get('/products', (req, res) => {
  res.json({ message: 'This is the GET product path' });
});
app.post('/products', (req, res) => {
  res.json({ message: 'This is the POST product path and a product was added' });
});
app.put('/products', (req, res) => {
  res.json({ message: 'This is the PUT product path and a product was updated' });
});
app.delete('/products', (req, res) => {
  res.json({ message: 'This is the DELETE product path and a product was deleted' });
});
// Routes for 'users'
app.get('/users', (req, res) => {
  res.json({ message: 'This is the GET user path' });
});
app.post('/users', (req, res) => {
  res.json({ message: 'This is the POST user path and a user was added' });
});
app.put('/users', (req, res) => {
  res.json({ message: 'This is the PUT user path and a user was updated' });
});
app.delete('/users', (req, res) => {
  res.json({ message: 'This is the DELETE user path and a user was deleted' });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});