import { collection } from "../mongo/mongodb.ts";
import { Request, Response } from "npm:express@4.18.2";
import { Personaje,Raza } from "../mongo/types.ts";




export const updatePersonaje = async (req:Request , res: Response)=>{
    
    try {
        const pers: Personaje = req.body
        console.log(pers._id);
        
        if(!pers.raza){
            res.status(500).send("fallo, no se encontro la raza")
            throw new Error
        }
        
        const exist = await collection.findOne({_id: pers._id})
        if(exist){
            await collection.updateOne(exist,{
                $set: {
                    nombre: pers.nombre,
                    descripcion: pers.descripcion,
                    raza: pers.raza
                }
            })
            res.status(200).send(pers)
            return
        }else{
            res.status(404).send("fallo, no se encontro _id")
            throw new Error
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(400).send(error.message)
        return
    }
    
    
}