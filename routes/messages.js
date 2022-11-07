const {Router} = require("express")
const router = Router()
const {
    rootMessage, 
    hiMessage, 
    byeMessage,
    postMessage,
    putMessage,
    deleteMessage
} = require('../controllers/messages.js')

//router.get("",()=>{})
router.get("/", rootMessage)

router.get("/hi/:name", hiMessage)

router.get("/bye", byeMessage)

router.post('/', postMessage)
router.put('/', putMessage)
router.delete('/', deleteMessage)
module.exports = router