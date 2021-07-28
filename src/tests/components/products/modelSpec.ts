import { ProductStore, Product } from "../../../components/products/model";

const store = new ProductStore();

const products = [
  {
    name: "testProduct1",
    price: "10",
    category: "testCategory1",
  },
  {
    name: "testProduct2",
    price: "10",
    category: "testCategory1",
  },
  {
    name: "testProduct3",
    price: "10",
    category: "testCategory2",
  },
];

beforeAll(async () => {
  products.forEach(async (product) => {
    await store.addProduct(product);
  });
});

describe("Product Store Methods", () => {
  it("should return a list of products", async () => {
    const products = await store.getAllProducts();
    expect(products).toBeDefined();
    expect(products?.length).toBeGreaterThan(0);
  });

  it("should get product by category", async () => {
    const productsByCategory = await store.getProductByCategory(
      "testCategory2"
    );
    expect(productsByCategory).toBeDefined();
    expect(productsByCategory?.length).toBeGreaterThan(0);
  });

  it("should get product by id", async () => {
    const product = await store.getProductById("1");
    expect(product).toBeDefined();
    expect(product?.name).toBeDefined();
    expect(product?.price).toBeDefined();
    expect(product?.category).toBeDefined();
  });

  it("should get most popular products", async () => {
    const products = await store.getMostPopularProducts();
    expect(products).toBeDefined();
    expect(products?.length).toBeGreaterThan(0);
  });
});
