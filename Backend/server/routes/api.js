import express from "express";
// controllers
// import VerifyToken from "../utils/Jwt.js";
import topstories from "../controllers/topStoriesController.js";
const router = express.Router();

router.get("/top-stories", topstories.getStories);

export default router;
