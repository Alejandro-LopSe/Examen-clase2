import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/mod.ts";
export enum Raza  {
    Hobbits = 'Hobbits',
    Humanos = 'Humanos',
    Elfos = "Elfos",
    Enanos= "Enanos",
    Ents = "Ents"
}

export type Personaje = {
    _id?: ObjectId;
    nombre: string;
    raza: Raza;
    descripcion: string;
    habilidades?: string[];
}

