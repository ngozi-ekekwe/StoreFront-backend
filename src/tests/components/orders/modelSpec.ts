import { Order, OrderStore } from "../../../components/orders/model";

const store = new OrderStore();

describe("OrderStore", () => {
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
