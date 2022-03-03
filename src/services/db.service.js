import db from "../configs/db.config";

const query = async (query, params) => {
  const data = await db.query(query, params);

  return data;
};

export { query };
