import axios from "axios";
import logger from "../libs/logger";
import { query } from "./db.service";

export const fetchPublicApi = async () => {
  const {
    data: {
      update: { penambahan },
    },
  } = await axios.get("https://data.covid19.go.id/public/api/update.json");

  return penambahan;
};

export const insert = async (data) => {
  const { rows } = await query(
    "INSERT INTO covid_data (total_positive, total_hospitalize, total_recovered, total_pass_away, date, created_date) VALUES ($1, $2, $3, $4, $5, $6)",
    Object.values(data)
  );

  return rows;
};

export const insertIfPublicApiUpdate = async () => {
  const publicApiData = await getCovidPublicData();
  const { tanggal } = publicApiData;

  const results = await query(
    "SELECT count(id) as count FROM covid_data WHERE date IN ($1)",
    [tanggal]
  );

  const [{ count }] = results.rows;
  if (count < 1) {
    await insert(publicApiData);
  }
  logger.info("Data is the lastest update!");
};

export const getSingle = async () => {
  const { rows } = await query(
    "SELECT * FROM covid_data ORDER BY id DESC LIMIT 1",
    []
  );

  return rows[0];
};
