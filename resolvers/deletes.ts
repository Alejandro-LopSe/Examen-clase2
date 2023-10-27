// deno-lint-ignore-file

import { Request, Response } from "npm:express@4.18.2";

import { collection } from "../mongo/mongodb.ts";
import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/mod.ts";


export const deleteperson = async ( req:Request , res: Response)=>{

    try {
        const _id: ObjectId = new ObjectId(req.params.id) 
        

        const exist = await collection.findOne({_id: _id})

        if(exist){
            await collection.deleteOne(exist)
            res.status(200).send("eliminado: "+exist._id)
            return
        }else{
            res.status(404).send("Persona no existe")
            return
        }
    } catch (error) {
        return error.message
    }
    
}
export const deleteall =async (req:Request , res: Response) => {
    try {
        await collection.deleteMany({})
        res.status(200).send("BD vaciada")
    } catch (error) {
        res.status(400).send(error.message)
        return
    }
}