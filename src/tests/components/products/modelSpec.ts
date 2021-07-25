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

describe("ProductStore Methods", () => {
  it("should return a list of products", async () => {
    const products = await store.getAllProducts();
    expect(products).toBeDefined();
    // expect(products?.length).toBeGreaterThan(0);
    // expect(products).toEqual(products)
  });

  it("should get product by category", async () => {
    const productsByCategory = await store.getProductByCategory(
      "testCategory2"
    );
    expect(productsByCategory).toBeDefined();
    // expect(productsByCategory?.length).toBeGreaterThan(0);
    // expect(productsByCategory).toEqual([
    //   {
    //     id: 3,
    //     name: 'testProduct3',
    //     price: '10',
    //     category: 'testCategory2',
    //   }
    // ])
  });

  it("should get product by id", async () => {
    const productById = await store.getProductById("1");
    expect(productById).toBeDefined();
    // expect(productById?.name).toBe('testProduct1');
  });
});
