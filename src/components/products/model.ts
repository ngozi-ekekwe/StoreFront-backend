import Client from "../../database";

export type Product = {
  name: String;
  price: Number;
  category: String;
};

export type Products = {
  id: Number;
  name: String;
  price: String;
  category: String;
};

export class ProductStore {
  async getAllProducts(): Promise<Products[] | undefined> {
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

  async getProductByCategory(category: String): Promise<Product[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products WHERE category=($1)";
      const result = await conn.query(sql, [category]);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async getProductById(id: String): Promise<Product | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (e) {}
  }

  async deleteProduct(id: String): Promise<Product | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "DELETE FROM products WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async updateProduct(
    id: String,
    product: Product
  ): Promise<Product | undefined> {
    const { name, price, category } = product;
    try {
      const conn = await Client.connect();
      const sql =
        "UPDATE products SET name=($1), price=($2), category=($3) WHERE id=($4)";
      const result = await conn.query(sql, [name, price, category, id]);
      conn.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async addProduct(product: any): Promise<Product[] | undefined> {
    const { name, price, category } = product;
    try {
      const conn = await Client.connect();
      const sql =
        "INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [name, price, category]);
      conn.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async getProductsByCategory(
    category: String
  ): Promise<Products[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products WHERE category=($1)";
      const result = await conn.query(sql, [category]);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async getMostPopularProducts(): Promise<Products[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql =
        "SELECT product_id, count(product_id), products.* from order_products INNER JOIN products ON product_id = products.id group by product_id, products.name, products.id order by count(product_id) desc LIMIT 5";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }
}
