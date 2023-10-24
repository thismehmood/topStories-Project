import axios from "axios";
import {
  // ERRORS,
  SUCCESS_MESSAGES,
  STATUS,
  STATUS_CODE,
} from "../../contants/index.js";

async function getStories(req, res) {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`
    );

    console.log("getStories");
    return res.status(STATUS_CODE.OK).json({
      status: STATUS.SUCCESS,
      message: SUCCESS_MESSAGES.OPERATION_SUCCESSFULL,
      response: response.data,
    });
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).json({
      status: STATUS.ERROR,
      message: error.message,
    });
  }
}

export default {
  getStories,
};
