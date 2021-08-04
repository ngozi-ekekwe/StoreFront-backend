import { OrderStore, Order } from "./model";

const store = new OrderStore();

export const createOrAddOrder = async (
  userId: String
): Promise<Order | undefined> => {
  let orderId;
  let userOrder;
  try {
    const order = await store.getUserOpenOrders(userId);
    if (order?.id) {
      orderId = order.id;
    } else {
      userOrder = await store.addOrder(userId);
      orderId = userOrder?.id;
    }
    return userOrder;
  } catch (e) {
    console.log(e);
  }
};

export const validateParameters = () => {};
