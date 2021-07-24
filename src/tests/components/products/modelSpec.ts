import { ProductStore, Product } from "../../../components/products/model";

const store = new ProductStore();

describe("ProductStore Methods", () => {
  it("should be defined", () => {
    expect(store).toBeDefined();
  });

  it("should be an instance of ProductStore", () => {
    expect(store instanceof ProductStore).toBe(true);
  });

  it("should have a method getAllProducts", () => {
    expect(store.getAllProducts).toBeDefined();
  });

  it("should have a method getProductById", () => {
    expect(store.getProductById).toBeDefined();
  });

  it("should have a method addProduct", () => {
    expect(store.addProduct).toBeDefined();
  });

  it("should have a method updateProduct", () => {
    expect(store.updateProduct).toBeDefined();
  });

  it("should have a method deleteProduct", () => {
    expect(store.deleteProduct).toBeDefined();
  });

  it("should have a method getAllProducts", () => {
    expect(store.getAllProducts).toBeDefined();
  });

  it("should have a method getProductById", () => {
    expect(store.getProductById).toBeDefined();
  });

  it("should have a method addProduct", () => {
    expect(store.addProduct).toBeDefined();
  });

  it("should have a method updateProduct", () => {
    expect(store.updateProduct).toBeDefined();
  });

  it("should have a method deleteProduct", () => {
    expect(store.deleteProduct).toBeDefined();
  });
});
