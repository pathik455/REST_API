const connectDB = require("./db/connect");
const Product = require("./Models/Schema");

const ProductJson = require("./data.json");

const data_to_database = async () => {
    try{
        await connectDB('mongodb://0.0.0.0:27017/');
        await Product.create(ProductJson);
        console.log("Success");
    }
    catch(error){
        console.log(error);
    }
};

data_to_database();