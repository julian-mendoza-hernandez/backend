const {Router}= require("express")
const router= Router()

const {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage} = require('../controllers/messages')

router.get("/", rootMessage) //endpoint
router.get("/hi", hiMessage) 
router.get("/bye", byeMessage)
router.post("/", postMessage) 
router.put("/", putMessage) 
router.delete("/", deleteMessage) 

module.exports=router
