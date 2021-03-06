const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/aunth");
const productRoute = require("./routes/products");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
//cors
var cors = require('cors');



//in order to use it 
dotenv.config();

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("Connection to database sucessfull"))
  .catch((err) => {
    console.log(err);
  });
//use of the end points
app.use(cors())
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/aunth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.listen(process.env.PORT, () => {
  console.log("Backend server is running");
});