import { Request, Response } from "express";
import { UserStore, User } from "./model";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const store = new UserStore();

const { JWT_SECRET } = process.env;

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const { user } = req.body;
  try {
    const newUser = await store.addUser(user);
    const token = jwt.sign({ user: newUser }, JWT_SECRET as string);
    res.status(201).json({
      token,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const user = await store.getUserById(userId);
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

export const getAllUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await store.getAllUsers();
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const user = await store.delete(userId);
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const user: User = {
    id: userId,
    firstName: req.body.user.firstName,
    lastName: req.body.user.lastName,
    password: req.body.user.password,
  };
  try {
    await store.update(userId, user);
    res.status(200).json({
      message: "User successfully updated",
    });
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

// cart items should be orders that are still open
export const getCartItems = async () => {};
