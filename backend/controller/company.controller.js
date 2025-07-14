import {Company} from "../models/company.model.js"

// register company

export const registerCompany = async (req,res)=>{
    try {
        const {companyName} = req.body;

    if(!companyName){
        return res.status(404).json({
            message:"company name required",
            success:"false"
        })
    }
 
     let  company = await Company.findOne({name:companyName});
     if(company){
        return res.status(404).json({
            message:"company name  already exists",
            success:false
        })
    }
        company = await Company.create({
            userId:req.id,
            name:companyName
        })

        res.status(201).json({
            message:"company registered succesfullly",
            company,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
    
      
     } 

     // get company by id

export const getCompany = async (req,res) =>{

      try {
        const userId = req.id;
        const company = await Company.find({userId});
        if(!company){
            res.status(404).json({
                message:"company not found",
                success:false
            })
        }

        res.status(201).json({
            company,
            success:true
        })
        
      } catch (error) {
        console.log(error);

      }
} 

 export  const getCompanyById = async (req,res) =>{
  try { 

    const companyId = req.params.id;
    let company = await Company.findById(companyId)

    if(!company){
        res.status(404).json({
            message:"company not found",
            success:false
        })
    }

        res.status(201).json({
            company,
            success:true
        })
    
    
  } catch (error) {
    console.log(error);

  }
 }

  export const updateCompany = async (req,res) =>{

    try {
        const {name,description, website, location} = req.body;

        const file = req.file;

        const companyData = {name,description, website, location};

        const company = await Company.findByIdAndUpdate(req.params.id, companyData, {new:true})

        if(!company){
            res.status(404).json({
                message:"company not found",
                success:false
            })
        }

        res.status(201).json({
            message:"company data updated succesfully",
            company,
            success:true
        })
    
        
    } catch (error) {
        console.log(error);

    }
 }