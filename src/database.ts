import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DB_DEV, DB_TEST } = process.env;

const Client = new Pool({
  host: "127.0.0.1",
  database: DB_DEV,
  port: 5432,
});

export default Client;
