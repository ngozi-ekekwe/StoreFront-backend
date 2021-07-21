import { Request, Response } from "express";
import { OrderStore, Order } from "./model";
import dotenv from "dotenv";

dotenv.config();

const store = new OrderStore();

export const addOrder = async (req: Request, res: Response): Promise<void> => {
  const { order } = req.body;
  const { userId } = req.params;
  let orderId;
  let userOrder;
  const newOrder = {
    ...order,
    status: "open",
  };
  try {
    // check if a user has already placed an order
    userOrder = await store.getUserOpenOrders(userId);
    if (userOrder?.id) {
      orderId = userOrder.id;
    } else {
      userOrder = await store.addOrder(newOrder);
      // @ts-ignore
      orderId = userOrder.id;
    }
    const orderItems = order.orderItems;
    // add products to order
    await store.addProductOrder(orderId, orderItems);
    // get all products in order
    const products = await store.getAllProductsInAnOrder(orderId);
    const result = {
      ...userOrder,
      items: products,
    };
    res.status(201).json(result);
  } catch (e) {
    console.log(e);
  }
};

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  const { orderId, userId } = req.params;
  try {
    const order = await store.getOrder(orderId, userId);
    res.status(200).json(order);
  } catch (e) {
    console.log(e);
  }
};

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, orderId } = req.params;
  const order: Order = {
    id: req.body.order.id,
    status: req.body.order.status,
    user_id: req.body.order.user_id,
    orderItems: req.body.order_items,
  };
  try {
    await store.update(orderId, order, userId);
    res.status(200).json({
      message: "Order Successfully updated",
    });
  } catch (e) {
    console.log(e);
  }
};

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  const { status } = req.query;
  let orders;
  try {
    if (status) {
      orders = await store.getOrdersByStatus(status as String);
    } else {
      orders = await store.getOrders();
    }
    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const order = await store.delete(id);
    res.status(200).json(order);
  } catch (e) {
    console.log(e);
  }
};



export const listCustomersCompletedOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const orders = await store.getUserClosedOrders(userId);
    console.log(orders);
    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
};

export const getCustomerCurrentOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const cart = await store.getUserOpenOrders(userId);
    const orderId = cart?.id;
    // @ts-ignore
    const products = await store.getAllProductsInAnOrder(orderId);
    const order = {
      ...cart,
      cart: products,
    };
    res.status(200).json(order);
  } catch (e) {
    console.log(e);
  }
};

export const getProductsInOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { orderId } = req.params;
  try {
    const products = await store.getAllProductsInAnOrder(orderId);
    res.status(200).send(products);
  } catch (e) {
    console.log(e);
  }
};
