import { Router } from "express";
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
router.get("/users", listUsers);
router.get("/users/:userId", showUser);
router.get("/users/:userId/orders", getCustomerOrders);
router.post("/users", createUser);
router.put("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);


// products
router.get("/products", listProducts);
router.get("/products/:id", showProduct);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

// orders
router.get("/orders", listOrders);
router.get("/orders/:id", showOrder);
router.post("/orders", createOrder);
router.delete("/orders/:id", deleteOrder);
router.put("/orders/:id", updateOrder);

export default router;
