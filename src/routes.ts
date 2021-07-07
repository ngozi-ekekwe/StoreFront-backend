import { Router } from "express";
import isAuthenticated from "./middlewares/isAuthenticated";

import {
  createUser,
  showUser,
  listUsers,
  deleteUser,
  updateUser,
  getCustomerOrders,
} from "./components/users";

import {
  createProduct,
  showProduct,
  listProducts,
  deleteProduct,
  updateProduct,
} from "./components/products";

import {
  createOrder,
  showOrder,
  listOrders,
  deleteOrder,
  updateOrder,
} from "./components/orders";

const router = Router();

// users
router.post("/users", createUser);
router.get("/users", isAuthenticated, listUsers);
router.get("/users/:userId", isAuthenticated, showUser);
router.get("/users/:userId/orders", isAuthenticated, getCustomerOrders);
router.put("/users/:userId", isAuthenticated, updateUser);
router.delete("/users/:userId", isAuthenticated, deleteUser);

// products
router.get("/products", listProducts);
router.get("/products/:id", showProduct);
router.post("/products", isAuthenticated, createProduct);
router.delete("/products/:id", isAuthenticated, deleteProduct);
router.put("/products/:id", isAuthenticated, updateProduct);

// orders
router.get("/orders", isAuthenticated, listOrders);
router.get("/orders/:id", isAuthenticated, showOrder);
router.post("/orders", isAuthenticated, createOrder);
router.delete("/orders/:id", isAuthenticated, deleteOrder);
router.put("/orders/:id", isAuthenticated, updateOrder);

export default router;
