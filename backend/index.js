const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const userRoutes = require('./routes/usersRoutes')
// const productRoutes = require('./routes/productsRoutes')
const cors = require('cors');
const mongoose = require('mongoose');
const url = "mongodb://Hassan8264:hassan8264@ac-j3d9hjc-shard-00-00.hwnbzfk.mongodb.net:27017,ac-j3d9hjc-shard-00-01.hwnbzfk.mongodb.net:27017,ac-j3d9hjc-shard-00-02.hwnbzfk.mongodb.net:27017/?replicaSet=atlas-tu1j8n-shard-0&ssl=true&authSource=admin"
mongoose.connect(url)

app.use(cors());
// app.use('/api', userRoutes)
// app.use('/api', productRoutes)
// app.use('/api', imgRoutes)


app.use(express.json());
app.use(bodyParser.json());



const Schema = mongoose.Schema;
const dataSchema = new Schema({
    name: String,
    age: Number,
});

// Create a model based on the schema
const Data = mongoose.model('Data', dataSchema);

// Route to fetch all data
app.get('/data', async (req, res) => {
  try {
    // Fetch all data from the collection
    const allData = await Data.find();
    res.status(200).json({ message: 'All data fetched successfully', data: allData });
} catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}

});



const port = 3000; // Port should be a number, not a URL
app.listen(port, () => {
  console.log('this app is running perfectly');
  console.log(`Port is running on http://localhost:${port}`);
});
