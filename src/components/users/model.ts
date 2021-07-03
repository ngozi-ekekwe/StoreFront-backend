import bcrypt from 'bcrypt';
import Client from "../../db";
import dotenv from 'dotenv';
import { Order } from "../orders/model";

dotenv.config();

const {
  SALT_ROUNDS,
  PEPPER
} = process.env

export type User = {
  id: Number;
  firstName: String;
  lastName: String;
  password: String;
};


export class UserStore {
  async create(user: any): Promise<User | undefined> {
    const { firstName, lastName, password } = user;
    try {
      const conn = await Client.connect();
      const hashPassword = bcrypt.hashSync(password + PEPPER, parseInt(SALT_ROUNDS as string, 10))
      const sql =
        "INSERT INTO users (firstName, lastName, password) VALUES ($1,$2, $3)";
      const result = await conn.query(sql, [firstName, lastName, hashPassword]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async index(): Promise<User[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async show(id: Number): Promise<User | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (e) {}
  }

  async delete(id: Number): Promise<User | undefined> {
    try {
      const conn = await Client.connect();
      const sql = 'DELETE FROM users WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      const deletedUser = result.rows[0];
      conn.release();
      return deletedUser;

    }catch(e) {
      console.log(e);
    }
  }

  async update(id: Number, user: User) : Promise<User | undefined> {
    try {
      const conn = await Client.connect();
      const sql = 'UPDATE users SET firstName=($1), lastName=($2) WHERE id=($3)';
      const result = await conn.query(sql, [user.firstName, user.lastName, id]);
      const deletedUser = result.rows[0];
      conn.release();
      return deletedUser;

    }catch(e) {
      console.log(e);
    }
  }

  async getUsersOrder(userId: Number) : Promise<Order[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders WHERE user_id=($1)';
      const result = await conn.query(sql, [userId]);
      const orders = result.rows;
      conn.release();
      return orders;
    }catch(e) {
      console.log(e);
    }
  }
}
