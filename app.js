const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = 3000;

const product_routes = require('./routes/products');

app.get("/", (req,res) =>{
  res.send("Hii");
});

app.use("/api/products", product_routes);


const start = async () => {
  try{
      await connectDB('mongodb://0.0.0.0:27017/');
      // Start the server
      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
      console.log("Success");
  }
  catch(error){
      console.log(error);
  }
};

start();


