import { Request, Response } from "express";
import { OrderStore, Order } from "./model";
import dotenv from "dotenv";

dotenv.config();

const store = new OrderStore();

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { order } = req.body;
  try {
    const newOrder = await store.create(order);
    // @ts-ignore
    const orderId = newOrder.id;
    const orderItems = order.orderItems;
    await store.addProductOrder(orderId, orderItems);
    res.status(201).json(newOrder);
  } catch (e) {
    console.log(e);
  }
};

export const showOrder = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await store.show(id);
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
  }
};

export const listOrders = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const orders = await store.index();
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

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const order: Order = {
    id: req.body.order.id,
    status: req.body.order.status,
    user_id: req.body.order.user_id,
    orderItems: req.body.order_items,
  };
  try {
    await store.update(id, order);
    res.status(200).json({
      message: "Order Successfully updated",
    });
  } catch (e) {
    console.log(e);
  }
};
