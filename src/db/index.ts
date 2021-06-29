import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DB_DEV, DB_TEST } = process.env;

const Client = new Pool({});

export default Client;
