import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

router.get("/getBMI",  (req, res) => {
    let result = Number(req.query.weight/(( req.query.hight/100)* req.query.hight/100));
    let msg = "";
    if(result>25){
        msg = "Fat"
    }
    else if(result==25) {
        msg = "Normal"
    }
    else if(result<25){
        msg = "Thin"
    }
    res.send({ BMI: result.toFixed(2),status:msg
        
     })
});
/*
Request
key
* */
//if (value) value ='',value=null , value=nuderfined return false
router.post("/postData",async  (req, res) => {
    responseObject = {
        msg: "",
        result: ""
    }
    if(!req.body.key){
        responseObject.msg = "Bad request";
        res.send({msg : responseObject.msg});
    }else{
        responseObject.msg = "success";
        responseObject.result = req.body.key * 5;
        res.send(responseObject);
}
    
});

module.exports = router;
