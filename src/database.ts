import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DB_DEV, NODE_ENV, DB_TEST } = process.env;

const Client = new Pool({
  host: "127.0.0.1",
  database: NODE_ENV === "test" ? DB_TEST : DB_DEV,
  port: 5432,
});

export default Client;
