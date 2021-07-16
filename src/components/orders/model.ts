import Client from "../../database";

export type OrderItem = {
  quantity: Number;
  productId: String;
};

export type Order = {
  id: Number;
  status: String;
  user_id: Number;
  orderItems: OrderItem[];
};

export type OrderProduct = {
  id: String;
  orderId: String;
  quantity: Number;
  productId: String;
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

  async getOrdersByStatus(status: String): Promise<Order[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders WHERE status=($1)";
      const result = await conn.query(sql, [status]);
      conn.release;
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserOpenOrders(userId: String): Promise<Order | undefined> {
    try {
      const conn = await Client.connect();
      const status = "open";
      const sql = "SELECT * FROM orders WHERE user_id=($1) AND status=($2)";
      const result = await conn.query(sql, [userId, status]);
      conn.release();
      return result.rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async getUserClosedOrders(userId: String): Promise<Order[] | undefined> {
    try {
      const conn = await Client.connect();
      const status = "closed";
      const sql = "SELECT * FROM orders WHERE user_id=($1) AND status=($2)";
      const result = await conn.query(sql, [userId, status]);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async show(id: String): Promise<Order | undefined> {
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
      const sql = "UPDATE orders SET status=($1) WHERE id=($2) RETURNING *";
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
        "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *";
      const result = await conn.query(sql, [user_id, status]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (e) {
      console.log(e);
    }
  }

  async addProductOrder(
    orderId: String,
    orderItems: []
  ): Promise<void | undefined> {
    try {
      const conn = await Client.connect();
      for (let i = 0; i < orderItems.length; i++) {
        const sql =
          "INSERT INTO order_products (order_id, quantity, product_id) VALUES ($1, $2, $3);";
        // @ts-ignore
        const quantity = orderItems[i].quantity;
        // @ts-ignore
        const productId = orderItems[i].productId;
        await conn.query(sql, [Number(orderId), quantity, Number(productId)]);
      }
      conn.release();
    } catch (e) {
      console.log(e);
    }
  }

  async getAllProductsInAnOrder(orderId: String) {
    try {
      const conn = await Client.connect();
      const sql =
        "SELECT * FROM products INNER JOIN order_products ON products.id = order_products.product_id WHERE order_products.order_id =($1)";
      const result = await conn.query(sql, [orderId]);
      conn.release();
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async getProductsInAnOrder(productId: String): Promise<void | undefined> {
    try {
      const conn = await Client.connect();
      const sql = "";
      const result = conn.query(sql, []);
      conn.release();
      return;
    } catch (e) {
      console.log(e);
    }
  }
}
