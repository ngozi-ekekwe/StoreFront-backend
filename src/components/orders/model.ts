import Client from "../../db";

export type Order = {
  id: Number;
  status: String;
  user_id: Number;
};

export class OrderStore {
  async index(): Promise<Order[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async show(id: string): Promise<Order | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async delete(id: String): Promise<Order | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "DELETE FROM orders WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async update(id: String, order: Order): Promise<Order | undefined> {
    const { status } = order;
    try {
      const conn = await Client.connect();
      const sql = "UPDATE orders SET status=($1) WHERE id=($4)";
      const result = await conn.query(sql, [status, id]);
      conn.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async create(order: Order): Promise<Order[] | undefined> {
    const { user_id, status } = order;
    try {
      const conn = await Client.connect();
      const sql =
        "INSERT INTO orders (user_id, status) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [user_id, status]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (e) {
      console.log(e);
    }
  }
}
