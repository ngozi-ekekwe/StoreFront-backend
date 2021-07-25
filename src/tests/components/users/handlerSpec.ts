import supertest from "supertest";
import app from "../../../app";

const request = supertest(app);

const BASE_URL = "/api/v1/";

let token: String;

describe("User Routes", () => {
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
    it("should require a token to view all users", async () => {
      const url = BASE_URL + "users";
      return await request.get(url).expect(401);
    });

    it("should return a list of users when a token is set", async () => {
      const url = BASE_URL + "users";
      const response = await request
        .get(url)
        .set("Authorization", "Bearer " + token)
        .expect(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.status).toEqual(200);
    });

    it("should get a single user", async () => {
      const url = BASE_URL + "users/1";
      const response = await request
        .get(url)
        .set("Authorization", "Bearer " + token)
        .expect(200);
      expect(response.body.firstname).toBeDefined();
      expect(response.body.lastname).toBeDefined();
      expect(response.body.password).toBeDefined();
    });
  });
});
