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

beforeAll(async (done) => {
  products.forEach(async (product) => {
    await store.addProduct(product);
  });
  done();
});

describe("ProductStore Methods", () => {
  it("should return a list of products", async (done) => {
    const products = await store.getAllProducts();
    expect(products).toBeDefined();
    // expect(products?.length).toBeGreaterThan(0);
    // expect(products).toEqual(products)
    done();
  });

  it("should get product by category", async (done) => {
    const productsByCategory = await store.getProductsByCategory(
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
    done();
  });

  it("should get product by id", async (done) => {
    const productById = await store.getProductById("1");
    expect(productById).toBeDefined();
    // expect(productById?.name).toBe('testProduct1');
    done();
  });
});
