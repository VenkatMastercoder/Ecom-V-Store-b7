const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

const prisma = new PrismaClient();

// API - GET : localhost:3000/ - Fetch all Product Details
app.get("/products", async (req, res) => {
  // 1. Data from Frontend

  // 2. DB Logic
  const productData = await prisma.product.findMany();

  // 3. Data to Frontend
  res
    .status(200)
    .json({
      message: "Product Data retrieved Successfully",
      data: productData,
    });
});

// API - GET : localhost:3000/product_id - Fetch a Product Details
app.get("/products/:product_id", async (req, res) => {
  // 1. Data from Frontend
  const data = req.params; // Product ID

  // 2. DB Logic
  const productData = await prisma.product.findUnique({
    where: {
      product_id: data.product_id,
    },
  });

  // 3. Data to Frontend
  res.status(200).json({ message: "Product Data retrieved Successfully",data: productData});
});

app.listen(3000);
