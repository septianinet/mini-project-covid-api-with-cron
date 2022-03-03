import { Pool } from "pg";

const db = new Pool({
  user: "me",
  host: "localhost",
  database: "api_covid",
  password: "password",
  port: 5432,
});

export default db;
