const express = require("express");
const router  = express.Router();


router.get("/check",(req,res)=>{
res.send("Welcome ! Everything is perfectly setUp")
});

module.exports = router;