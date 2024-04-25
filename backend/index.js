const express = require("express");
const http = require("http");
const config = require("./config");
const mongoose = require("mongoose");
const app = express();
const server = http.createServer(app);
// API endpoint to insert data into MongoDB
app.use(express.json());

const productSchema = new mongoose.Schema({
  name: String,
  description: String
});
const productModel = mongoose.model('product', productSchema);

// Express route for adding a product
app.post('/product', (req, res) => {
  const { name, description } = req.body;
  const newProduct = new productModel({ name, description });

  newProduct.save((err, savedProduct) => {
    if (err) {
      console.error('Error saving product:', err);
      return res.status(500).send({ message: 'Server error' });
    }
    console.log('Product saved successfully:', savedProduct);
    res.status(201).send({ message: 'Product added successfully' });
  });
});

server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});

// const Product = mongoose.model('Product', ProductSchema);

// app.use(express.json());
// app.get('/api/products', async (req, res) => {
//   try {
//     // Fetch all products from the database
//     // const products = await Product.find();
//     res.status(200).json({ mes: 'all products found' });
//     // res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// // app.use('/api', routes);
