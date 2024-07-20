import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!, I am Taha.');
});

app.get('/about', (req, res) => {
  res.send("<h1>About Page</h1>  <p>This is the about page.</p>");
});
app.get('/contact', (req, res) => {
  res.send("<h1>Contact Page</h1>  <p>This is the contact page.</p>");
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});