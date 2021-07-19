import { Router } from "express";
import isAuthenticated from "./middlewares/isAuthenticated";
import validateUser from "./middlewares/validateUser";

import {
  addUser,
  getUserById,
  getAllUsers,
  deleteUser,
  updateUser,
  getCustomerOrders,
} from "./components/users";

import {
  addProduct,
  getProductById,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getMostPopularProduct,
} from "./components/products";

import {
  addOrder,
  getOrder,
  getOrders,
  deleteOrder,
  updateOrder,
  listCustomersCompletedOrders,
  getCustomerCurrentOrder,
} from "./components/orders";

const router = Router();

// users
router.post("/users", addUser);
router.get("/users", isAuthenticated, getAllUsers);
router.get("/users/:userId", isAuthenticated, getUserById);
router.get("/users/:userId/orders", isAuthenticated, getCustomerOrders);
router.put("/users/:userId", isAuthenticated, updateUser);
router.delete("/users/:userId", isAuthenticated, deleteUser);
router.get("/users/:userId/cart", isAuthenticated, validateUser);

// products
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/products/most-popular", getMostPopularProduct);
router.post("/products", isAuthenticated, addProduct);
router.delete("/products/:id", isAuthenticated, deleteProduct);
router.put("/products/:id", isAuthenticated, updateProduct);

// orders
router.get("/orders", isAuthenticated, getOrders);
router.get("/orders/:id", isAuthenticated, getOrder);
router.post("/orders/:userId", isAuthenticated, validateUser, addOrder);
router.get(
  "/orders/user/completed/:userId",
  isAuthenticated,
  validateUser,
  listCustomersCompletedOrders
);

router.delete("/orders/:id", isAuthenticated, deleteOrder);
router.put("/orders/:id", isAuthenticated, updateOrder);

// customer current order
router.get(
  "/orders/user/:userId",
  isAuthenticated,
  validateUser,
  getCustomerCurrentOrder
);

export default router;
