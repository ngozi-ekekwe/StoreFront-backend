import { Request, Response } from "express";
import { ProductStore, Product } from "./model";
import dotenv from "dotenv";

dotenv.config();

const store = new ProductStore();

export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { product } = req.body;
  try {
    const newProduct = await store.addProduct(product);
    res.status(201).json(newProduct);
  } catch (e) {
    console.log(e);
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await store.getProductById(id);
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category, filter } = req.query;
  let products;
  try {
    if (category) {
      products = await store.getProductByCategory(category as String);
    }
    if (filter) {
      products = await store.getMostPopularProducts();
    } else {
      products = await store.getAllProducts();
    }
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await store.deleteProduct(id);
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const product: any = {
    name: req.body.product.name,
    price: req.body.product.price,
    category: req.body.product.category,
  };
  try {
    await store.updateProduct(id, product);
    res.status(200).json({
      message: "Product Successfully updated",
    });
  } catch (e) {
    console.log(e);
  }
};

export const getMostPopularProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await store.getMostPopularProducts();
    res.status(200).json({
      message: "Most popular products",
    });
  } catch (e) {
    console.log(e);
  }
};
