import express from "express"
import { getAllJob,getJobById,adminsJob,postJob} from "../controller/job.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJob);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/getadminjob").get(isAuthenticated,adminsJob);

export default router