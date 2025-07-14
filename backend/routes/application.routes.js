import express from "express"
import { getApplicant, getAppliedJob, applyJob,updateStatus } from "../controller/application.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/apply/:id").post(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getAppliedJob);
router.route("/:id/applicants").get(isAuthenticated, getApplicant);
router.route("/status/:id/update").put(isAuthenticated,updateStatus);

export default router