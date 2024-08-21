
import express, { Request, Response, NextFunction } from "express"

import routes from "./routes/index"


const app = express() 

// middleware 

app.use( express.json() )

// Routes 
routes(app) 


// Server 
const PORT = 3000 
app.listen( PORT, ()=>{
    console.log(" app listening on Port " + PORT )
})