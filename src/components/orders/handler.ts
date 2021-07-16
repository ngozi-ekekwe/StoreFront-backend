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
  const { userId } = req.params;
  let orderId;
  let userOrder;
  const o = {
    ...order,
    status: "open",
  };
  try {
    userOrder = await store.getUserOpenOrders(userId);
    if (userOrder?.id) {
      orderId = userOrder.id;
    } else {
      userOrder = await store.create(o);
      // @ts-ignore
      orderId = userOrder.id;
    }
    const orderItems = order.orderItems;
    await store.addProductOrder(orderId, orderItems);
    res.status(201).json(userOrder);
  } catch (e) {
    console.log(e);
  }
};

export const showOrder = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const order = await store.show(id);
    res.status(200).json(order);
  } catch (e) {
    console.log(e);
  }
};

export const listOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { status } = req.query;
  let orders;
  try {
    if (status) {
      orders = await store.getOrdersByStatus(status as String);
    } else {
      orders = await store.index();
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

export const listCustomersCompletedOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const orders = await store.getUserClosedOrders(userId);
    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
};

export const getCustomerCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const cart = await store.getUserOpenOrders(userId);
    res.status(200).json(cart);
  } catch (e) {
    console.log(e);
  }
};

export const getProductsInOrder = async (
  req: Request,
  res: Response
) : Promise<void>  => {
  try {

  }catch(e) {
    console.log(e)
  }
}
