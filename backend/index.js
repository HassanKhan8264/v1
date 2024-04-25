const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.use(express.json());


const port =  process.env.PORT || 5001
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
