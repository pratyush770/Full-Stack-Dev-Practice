const Joi =require("joi");

const studentSchema = Joi.object({
    id : Joi.number().integer().min(1).max(4).required(),
    name : Joi.string().min(3).required(),
    age: Joi.number().integer().min(18).max(30).required(),
    course: Joi.string().valid("FY MCA", "SY MCA", "FY MBA", "SY MBA").required(),
    email : Joi.string().email({minDomainSegments:2}).required(),
})

const validateStudent = (req,res,next)=>{
    const {error} = studentSchema.validate(req.body);
    if(error){
        return res.status(400).send({message:error.details[0].message})
        }
        next();
};

module.exports = validateStudent;