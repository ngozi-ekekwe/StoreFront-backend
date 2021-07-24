import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

let Client;

const { DB_DEV, NODE_ENV, DB_TEST } = process.env;
if (NODE_ENV === "test") {
  Client = new Pool({
    host: "127.0.0.1",
    database: DB_DEV,
    port: 5432,
  });
}

if (NODE_ENV === "development") {
  Client = new Pool({
    host: "127.0.0.1",
    database: DB_TEST,
    port: 5432,
  });
}

export default Client;
