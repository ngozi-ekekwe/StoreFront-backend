import supertest from "supertest";
import app from "../../../app";

const request = supertest(app);

const BASE_URL = "/api/v1/";

let token;

describe("/POST", () => {
  it("should create a new user and return a token", async () => {
    const url = BASE_URL + "users";
    const response = await request.post(url).send({
      user: {
        firstName: "ngozi",
        lastName: "rose",
        password: "password",
      },
    });
    token = response.body.token;
    expect(response.body.token).toBeDefined();
    expect(response.body.success).toBe(true);
  });
});

describe("/GET", () => {
  it("should require a token to view all users", () => {
    const url = BASE_URL + "users";
    return request.get(url).expect(401);
  });

  it("should get a single user", () => {});
});
