const {request, response}= require ("express")

const rootMessage=(req=request, res=response) => {res.status(404).json({msg:"Mensajes"})}
const hiMessage=(req=request, res=response) => {res.status(404).json({msg:"Hola Mundo"})}
const byeMessage=(req=request, res=response) => {res.status(404).json({msg:"Adios Mundo"})}
const postMessage=(req=request, res=response) => {res.status(404).json({msg:"Mensaje Post"})}
const putMessage=(req=request, res=response) => {res.status(404).json({msg:"Mensajes Put"})}
const deleteMessage=(req=request, res=response) => {res.status(404).json({msg:"Mensajes delete"})}

module.exports= {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}