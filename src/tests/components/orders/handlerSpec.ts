import supertest from "supertest";
import app from "../../../app";

const request = supertest(app);

describe("/GET", () => {
  it("get user's orders", () => {});

  it("should get a user's single order", () => {});
});

describe("/PUT", () => {
  it("should update a user's order", () => {});
});

describe("/POST", () => {
  it("should create a new order", () => {});
});
