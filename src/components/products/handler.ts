import { Request, Response } from "express";
import { ProductStore, Product } from "./model";
import dotenv from "dotenv";

dotenv.config();

const store = new ProductStore();

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { product } = req.body;
  try {
    const newProduct = await store.create(product);
    res.status(201).json(newProduct);
  } catch (e) {
    console.log(e);
  }
};

export const showProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await store.show(id);
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
  }
};

export const listProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {category} = req.query;
  let products;
  try {
    if(category) {
      products = await store.getProductByCategory(category as String);
    }else {
      products = await store.index();
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
    const product = await store.delete(id);
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
  const product: Product = {
    id: req.body.user.id,
    name: req.body.product.firstName,
    price: req.body.product.price,
    category: req.body.product.category,
  };
  try {
    const updatedProdut = await store.update(id, product);
    res.status(200).json(updatedProdut);
  } catch (e) {
    console.log(e);
  }
};
