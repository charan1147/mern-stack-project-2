const express=require("express")
const router=express.Router()
const Student=require("../models/Students")


//get api to find the students data or to fetch the students data

router.get("/",async(req,res)=>{
    try {
        const students=await Student.find() // it will fetch all the students data(we have to use find())
        res.json(students)
    } catch (error) {
        res.status(500).send("serer error")
    }
})

//post api to post the student data
router.post("/",async(req,res)=>{
    const {name,age,course}=req.body
    try {
        const newStudents=new Student({
            name,age,course
        })
        const student=await newStudents.save()//save method to save the students in database
        res.json(student)
        
    } catch (error) {
        res.status(500).send("server is running")
    }
})

module.exports=router