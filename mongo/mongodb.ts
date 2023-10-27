// deno-lint-ignore-file
// deno-lint-ignore-file no-var
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { MongoClient, Database } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import {Personaje,Raza} from "./types.ts"

const env = await load();
const url = env["MONGO_URL"]


const connectMongoDB = async (): Promise<Database> => {


  try{

    const mongo_url = url

    const client = new MongoClient();
    await client.connect(mongo_url);
  
    const db = client.database("LOTR");
    return db;

  }catch(error){
    
    console.log(error)
    return error
  }
  
};

const db = await connectMongoDB();
console.info(`MongoDB ${db.name} connected`);



export const collection = db.collection<Personaje>("personajes")




