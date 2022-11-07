const { request, response } = require("express")

const rootMessage = (req = request,res = response)=>{
    const {texto1,texto2} = req.query
 //   if (!texto1 || !texto2){
    //    res.status(404).json({
    //        msg:No se han enviado los parámetros necesarios, 
      //      este EndPoint ocupa los parametros "texto1" y "texto2"
      //  })
   // }
   if (!texto1){
    res.status(400).json({msg: "Falta el parámetro 'texto1'"})
   }
   if (!texto2){
    res.status(400).json({msg: "Falta el parámetro 'texto2'"})
   }
    res.status(200).json({msg:texto1 + ' ' + texto2})
}

const hiMessage = (req = request,res = response)=>{
    const {name} = req.params
    res.json({msg:"Hola " + name})
}

const byeMessage = (req = request,res = response)=>{
    res.json({msg:"Adios mundo"})
}

const postMessage = (req = request,res = response)=>{
    const {no_control,nombre} = req.body
    //console.log({no_control,nombre})
    res.json({
        msg:`Número de control = ${no_control}, nombre = ${nombre}`})
}

const putMessage = (req = request,res = response)=>{
    res.json({msg:"Mensaje PUT"})
}

const deleteMessage = (req = request,res = response)=>{
    res.json({msg:"Mensaje DELETE"})
}
module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}