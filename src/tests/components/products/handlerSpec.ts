import supertest from "supertest";
import app from "../../../app";

const request = supertest(app);

let token: String;

const BASE_URL = "/api/v1/";

beforeAll(async () => {
  // create new user and get token
  const url = BASE_URL + "users";
  const response = await request.post(url).send({
    user: {
      firstName: "ngozi",
      lastName: "rose",
      password: "password",
    },
  });
  token = response.body.token;
});

describe("Product Routes", () => {
  describe("/GET", () => {
    it("should return a single product", async () => {
      const url = BASE_URL + "products/1";
      const response = await request.get(url);
      expect(response.status).toBe(200);
    });

    it("should list all products", async () => {
      const url = BASE_URL + "products";
      const response = await request.get(url);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.status).toBe(200);
    });
  });

  describe("/POST", () => {
    it("should create product", async () => {
      const url = BASE_URL + "products";
      const response = await request
        .post(url)
        .set("Authorization", `Bearer ${token}`)
        .send({
          product: {
            name: "product1",
            price: 20,
            category: "drinks",
          },
        });
      expect(response.body.name).toBe("product1");
      expect(response.body.category).toBe("drinks");
      expect(response.status).toBe(201);
    });

    it("should require a token for creating products", async () => {
      const url = BASE_URL + "products";
      const response = await request.post(url).send({
        product: {
          name: "product1",
          price: 20,
          category: "drinks",
        },
      });
      expect(response.body.message).toBe(
        "Unauthorized, Token required to access this route"
      );
      expect(response.status).toBe(401);
    });
  });
});
