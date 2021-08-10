import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const {
  DB_DEV,
  NODE_ENV,
  DB_TEST,
  POSTGRESS_HOST,
  POSTGRESS_USER,
  POSTGRES_PASSWORD,
} = process.env;

const Client = new Pool({
  host: POSTGRESS_HOST,
  user: POSTGRESS_USER,
  password: POSTGRES_PASSWORD,
  database: NODE_ENV === "test" ? DB_TEST : DB_DEV,
  port: 5432,
});

export default Client;
