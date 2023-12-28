const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors package
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const productRoute = require("./routes/products");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/FoodPanda");
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

dotenv.config();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    credentials: true,
  })
);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(4000, () => {
  connectDB();
  console.log("Server running on port 4000");
});
