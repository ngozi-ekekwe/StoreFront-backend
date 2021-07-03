import Client from "../../db";

export type Product = {
  id: Number;
  name: String;
  price: Number;
  category: String;
};

export class ProductStore {
  async index(): Promise<Product[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async show(id: Number): Promise<Product | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (e) {}
  }

  async delete() {}

  async update() {}

  async create() {}
}
