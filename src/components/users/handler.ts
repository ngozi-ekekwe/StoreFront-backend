import { Request, Response } from "express";
import { UserStore, User } from "./model";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const store = new UserStore();

const { JWT_SECRET } = process.env;

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user } = req.body;
  try {
    const newUser = await store.create(user);
    const token = jwt.sign({ newUser }, JWT_SECRET as string);
    res.status(201).json(token);
  } catch (e) {
    console.log(e);
  }
};

export const showUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  try {
    const user = await store.show(userId);
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

export const listUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await store.index();
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await store.delete(id);
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const user: User = {
    id: req.body.user.id,
    firstName: req.body.user.firstName,
    lastName: req.body.user.lastName,
    password: req.body.user.password,
  };
  try {
    const updatedUser = await store.update(id, user);
    res.status(200).json(updatedUser);
  } catch (e) {
    console.log(e);
  }
};

export const getCustomerOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const orders = await store.getUsersOrder(userId);
    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
};
