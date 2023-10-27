import express, {Response,Request} from "npm:express@4.18.2";
import { addpersonaje } from "../resolvers/post.ts";
import { getall, getperson } from "../resolvers/gets.ts";
import { updatePersonaje } from "../resolvers/update.ts";
import { deleteperson } from "../resolvers/deletes.ts";


const app = express();
app.use(express.json())


app.get("/",(req: Request, res: Response) =>{
  res.status(200).send("Funcionando")
})
.post("/api/tierramedia/personajes",addpersonaje)
.get("/api/tierramedia/personajes/:id",getperson)
.get("/api/tierramedia/personajes",getall)
.put("/api/tierramedia/personajes",updatePersonaje)
.delete("/api/tierramedia/personajes/:id",deleteperson)



app.listen(8000, () => {
  console.log("Server is running on port 8000\n");
});