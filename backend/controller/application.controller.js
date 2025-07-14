import { Application} from "../models/application.js";
import { Job } from "../models/job.model.js";
import { login } from "./user.controller.js";

export const applyJob =  async (req,res) => {
    try {

      const userId = req.id;
      const jobId = req.params.id;

      if(!jobId){
        return res.status(404).json({
            message:"Job id is required",
            success:false,

        })
      } 

      // check if user already apply for the job
      const existingApplicant = await Application.findOne({job:jobId,applicant:userId});

      if(existingApplicant){
        return res.status(404).json({
            message:"you already apply for this job",
            success:false,

        })
      } 

      const job = await Job.findById(jobId);
      if(!job){
        return res.status(404).json({
            message:"job not found",
            success:false,

        })
      } 

      // create a new job

      const newApplicant = await Application.create({
        job:jobId,
        applicant:userId
      })  

      job.applications.push(newApplicant._id);
        await job.save();

        return res.status(200).json({
            message:"job applied successfully",
            success:true,

        })
    } catch (error) {
        console.log(error);
    }
}  

export const getAppliedJob = async (req,res) => {
    try {
     const userId = req.id;

     const appliedJob = await Application.findOne({applicant:userId}).sort({createdAt:-1}).populate({
        path:'job',
        options:{sort:{createdAt:-1}},
        populate:{
            path:'company',
            options:{sort:{createdAt:-1}}

        }
     })
     if(!appliedJob){
        return res.status(404).json({
            message:"application not found",
            success:false,

        })
     }  

     return res.status(200).json({
        appliedJob,
        success:true,

    })

    } catch (error) {
        console.log(error);
    }
} 

// Admin will see how many users applies foe the job
export const getApplicant = async (req,res) =>{
    try {
        const jobId =  req.params.id;

        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        })

        if(!job){
            return res.status(404).json({
                message:"applicant not found",
                success:false,
    
            })
         }   

    
            return res.status(200).json({
                job,
                success:true,
    
            })
        
         
    } catch (error) {
        console.log(error);

    }
} 

export const updateStatus = async(req,res) =>{
    try {
        const {status} = req.body;
        const applicantionId = req.params.id;
  
       if(!status){
        res.status(404).json({
          message:"status is required",
          success:false,
        })
       } 

       const application = await Application.findById({_id:applicantionId})
       if(!application){
        res.status(404).json({
            message:"Application not found",
            success:false,
          })
       } 

       application.status = status;
       await application.save();

       res.status(200).json({
        message:"status updated successfully",
        application,
        success:true,
      })
        
    } catch (error) {
        console.log(error);

    }
     
}

 