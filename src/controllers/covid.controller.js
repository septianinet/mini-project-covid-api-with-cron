import logger from "../libs/logger";
import * as covidService from "../services/covid.service";

export const get = async (req, res, next) => {
  try {
    const resultSingle = await covidService.getSingle();

    res.status(200).json(resultSingle);
  } catch (error) {
    logger.error(`Error while getting data from public api ${error.message}`);
    next(error);
  }
};
