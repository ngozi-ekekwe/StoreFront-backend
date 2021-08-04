import { OrderStore } from "../../../components/orders/model";
import { UserStore } from "../../../components/users/model";
import { Product } from "../../../components/products/model";

const store = new OrderStore();
const user = new UserStore();

let userId: String | undefined;
describe("Order", () => {
  beforeAll(async () => {
    const newUser = await user.addUser({
      firstName: "orderUser",
      lastName: "orderUser",
      password: "veronica1",
    });
    userId = newUser?.id;
  });

  describe("Methods", () => {
    it("should be defined", () => {
      expect(store).toBeDefined();
    });

    it("should be an instance of OrderStore", () => {
      expect(store instanceof OrderStore).toBeTruthy();
    });

    it("should have a method getOrders", () => {
      expect(store.getOrders).toBeDefined();
    });

    it("should have a method getOrder", () => {
      expect(store.getOrder).toBeDefined();
    });

    it("should have a method addOrder", () => {
      expect(store.addOrder).toBeDefined();
    });
  });

  describe("Model", () => {
    it("should add a new order", async () => {
      const order = await store.addOrder(userId as unknown as string);
      expect(order?.user_id).toBeDefined();
      expect(order?.status).toBe("open");
    });

    it("should add product to order", async () => {
      const orderItems = [
        {
          quantity: 2,
          productId: "1",
        },
      ];
      const orderProduct = await store.addProductOrder("1", orderItems);
    });

    it("should get all products in an order", async () => {
      const product = await store.getAllProductsInAnOrder("1");
      expect(product?.length).toBeGreaterThan(0);
    });
  });
});
