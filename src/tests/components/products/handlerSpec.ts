import supertest from "supertest";
import app from "../../../app";

const request = supertest(app);

describe("/GET", () => {
  it("should return a single product", () => {});

  it("should list all products", () => {});
});

describe("/POST", () => {
  it("should create product", () => {});
});
