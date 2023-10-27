import { collection } from "../mongo/mongodb.ts";
import { Request, Response } from "npm:express@4.18.2";
import { nothave } from "./funciones.ts";
import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/mod.ts";





export const getperson = async (req:Request , res: Response)=>{
    
    try {


        const id: ObjectId = new ObjectId(req.params.id) 
        

        const exist= await collection.findOne({_id: id})
        if(exist){
            res.status(200).send(exist)
            return
        }else{
            res.status(404).send("fallo, no se encontro id")
            throw new Error
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(404).send(error.message)
        return
    }
    
    
}

export const getall = async (req:Request , res: Response)=>{
    try {
        const id: number = parseInt(req.params.id)
        console.log(id);
        
        const exist = await collection.find({}).toArray()
        if(exist){
            res.status(200).send(exist)
            return
        }else{
            res.status(400).send("fallo la query")
            throw new Error
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(400).send(error.message)
        return
    }
    
    
}