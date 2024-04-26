const express = require("express");
const model = require("../models/model");
const router = express.Router();
// router.post('/post', async (req, res) => {
//     const data = new Model({
//       name: req.body.name,
//       age: req.body.age
//     })

//     try {
//       const dataToSave = await data.save();
//       res.status(200).json(dataToSave)
//     }
//     catch (error) {
//       res.status(400).json({ message: error.message })
//     }

// })
router.post("/post", async (req, res) => {
   
  try {
    const newData = await model.create({
      name: req.body.name,
      age: req.body.age,
    });

    // Send response with status 200 and saved data
    res.status(200).json({
      mes: "send data to db",
      data: newData,
    });
    console.log(newData);
  } catch (err) {
    // Send error response with status 400 and error message
    res.status(400).json({ message: err.message });
  }
});

// router.post('/post', async (req, res) => {
//     const data = new Model({
//       name: req.body.name,
//       age: req.body.age
//     })

//     try {
//       const dataToSave = await data.save();
//       res.status(200).json(dataToSave)
//     }
//     catch (error) {
//       res.status(400).json({ message: error.message })
//     }
//   })

module.exports = router;
