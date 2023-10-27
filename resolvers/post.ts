import { Request, Response } from "npm:express@4.18.2";

import { Personaje, Raza } from "../mongo/types.ts";
import { collection } from "../mongo/mongodb.ts";
//import { doexist, mustbeanumber } from "./funciones.ts";


export const addpersonaje = async ( req:Request , res: Response)=>{

    try {
        
        if(undefined===req.body){
            throw String("No se ha proporcionado objeto");
        }

        const person: Personaje= {
            nombre: req.body.nombre,
            raza: req.body.raza ,
            descripcion: req.body.descripcion,
            habilidades: req.body.habilidades
        }
        const exist = await collection.findOne({nombre: person.nombre})

        if(!(person.raza===Raza.Elfos)  || !(person.raza===Raza.Enanos)  || !(person.raza===Raza.Hobbits)  ||  !(person.raza===Raza.Humanos) ){
            res.status(500).send("Raza mal introducidos.")
            throw new Error("Faltan datos o estan mal introducidos.");
        }else if(!person.descripcion || !person.nombre ){
            res.status(500).send("Raza mal introducidos.")
            throw String("Faltan datos ");
        }else if(exist){
            res.status(500).send("ya existe un personaje")
            throw String("ya existe un personaje");
        }

        await collection.insertOne(person)
        console.log(person)
        res.status(200).send({
            _id: person._id?.toString(),
            nombre: person.nombre,
            raza: person.raza,
            descripcion: person.descripcion,
            habilidades: person.habilidades
        })
        console.log(typeof(res));
        
        return 

        

    } catch (error) {
        console.log(error);

        res.status(400).send({name: error})
        console.log(typeof(res.body));
        console.log();
        return error
    }
}