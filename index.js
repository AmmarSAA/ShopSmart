const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');

const clientPath = path.join(
  __dirname, './client/dist'
)
app.use('/', express.static(clientPath));

const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(cors());

// Define routes using the appropriate route handlers
app.use('/api/users', require('./api/user/Routes'));
app.use('/api/category', require('./api/category/Routes'));
app.use('/api/brand', require('./api/brand/Routes'));
app.use('/api/product', require('./api/product/Routes'));
app.use('/api/order', require('./api/order/Routes'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})


app.listen(port, () => {
  console.log(`ShopSmart launched on port ${port}`);
});
