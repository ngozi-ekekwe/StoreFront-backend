import { Router } from "express";
import isAuthenticated from "./middlewares/isAuthenticated";
import validateUser from "./middlewares/validateUser";

import {
  addUser,
  getUserById,
  getAllUsers,
  getCustomerOrders,
  login,
} from "./components/users";

import {
  addProduct,
  getProductById,
  getAllProducts,
  getMostPopularProduct,
} from "./components/products";

import {
  addOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "./components/orders";

const router = Router();

// users
router.post("/users", addUser);
router.post("/login", login);
router.get("/users", isAuthenticated, getAllUsers);
router.get("/users/:userId", isAuthenticated, getUserById);
router.get("/users/:userId/orders", isAuthenticated, getCustomerOrders);
router.get("/users/:userId/cart", isAuthenticated, validateUser);

// products
router.post("/products", isAuthenticated, addProduct);
router.get("/products/:id", getProductById);
router.get("/products/all/most-popular", getMostPopularProduct);
router.get("/products", getAllProducts);

// orders
router.post("/orders/:userId", isAuthenticated, validateUser, addOrder);
router.get("/orders/:userId", isAuthenticated, validateUser, getOrders);
router.get("/orders/:userId/:orderId", isAuthenticated, validateUser, getOrder);
router.put(
  "/orders/:userId/:orderId",
  isAuthenticated,
  validateUser,
  updateOrder
);

export default router;
