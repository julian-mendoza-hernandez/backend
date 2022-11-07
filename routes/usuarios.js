const {Router} = require("express")
const {getUsers, getUserbyID, deleteUserbyID, addUser, updateUserByUsuario, signIn, updateContrasena} = require("../controllers/usuarios")
const router = Router()

// http://localhost:4000/api/v1/usuarios/?id=1

//GET
router.get("/",getUsers)
router.get("/id/:id",getUserbyID) //http://localhost:4000/api/v1/usuarios/id/11

//POST
router.post("/", addUser)
router.post("/signin", signIn)

//PUT
router.put("/", updateUserByUsuario)
router.put("/update", updateContrasena)

//DELETE
router.delete("/", deleteUserbyID) // http://localhost:4000/api/v1/usuarios/?id=1

module.exports = router