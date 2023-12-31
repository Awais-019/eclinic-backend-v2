import express from "express";
import patients from "../controllers/patients.controller";
import validators from "../validators/patients.validator";
import validateMiddlware from "../middlewares/validate";
import trycatchMiddleware from "../middlewares/trycatch";
import authMiddleware from "../middlewares/auth";

const router = express.Router();

router.post(
  "/register",
  validateMiddlware(validators.create),
  trycatchMiddleware(patients.create)
);

router.get("/tests", authMiddleware(), trycatchMiddleware(patients.getTests));

router.get(
  "/reports",
  authMiddleware(),
  trycatchMiddleware(patients.getReports)
);

export default router;
