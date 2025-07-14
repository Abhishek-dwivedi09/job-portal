import { Job } from "../models/job.model.js";

export const  postJob = async (req,res) =>{
  try {
   const  {title, description, requirements, salary, location, jobType, experiance, position, companyId} = req.body;
     const userId = req.id;
   
   if(!title || !description || !requirements || !salary || !location || !jobType|| !experiance || !position || !companyId){
       return res.status(404).json({
            message:"Something is missing",
            success: false

        })
      } 

      const job = await Job.create({
        title,
        description,
        requirements:requirements.split(','),
        salary:Number(salary),
        location,
        jobType,
        experianceLevel:experiance,
        position,
        company:companyId,
        created_by:userId
      })

     return  res.status(201).json({
        message:"Job created succesfully",
        job,
        success: true

    })
     
  } catch (error) {
    console.log(error);
  }

}

// get jobs 

export const getAllJob = async(req,res)=>{
    const keyword = req.query.keyword || " "
    const query = {
         $or:[
            { title: { $regex: keyword, $options: 'i' } },
            { description: { $regex: keyword, $options: 'i' } }
         ]
    } 

    const jobs = await Job.find(query);
    if(!jobs){
      return  res.status(404).json({
            message:"job not found",
            success: false

        }) 
    }

         return res.status(200).json({
            jobs,
            success: true

        }) 
} 

export const  getJobById = async (req,res) =>{
    try {
        const id = req.params.id;

        const jobs = await Job.findById(id);
     
        if(!jobs){
          return res.status(404).json({
             message:"job not found",
             success:false
          })
        }
     
         return res.status(200).json({
         jobs,
         success: true
     
     }) 
        
    } catch (error) {
         console.log(error)
    }
}  


// admin how many job created
 
export const adminsJob = async(req,res)=>{

    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId})

        if(!jobs){
            return res.status(404).json({
               message:"job not found",
               success:false
            })
          }

          return res.status(200).json({
            jobs,
            success: true
        
        }) 
        
    } catch (error) {
        console.log(error)

    }
} 