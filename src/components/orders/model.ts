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

  async delete() {}

  async update() {}

  async create() {}
}
