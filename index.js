import bootstrap from './bootstrap.js'
import express from 'express'
import { dbConnection } from './Database/dbConnection.js'
const app = express()
app.use(express.json())
bootstrap(app,express)
app.listen(3000,(err)=>{
    if(err){console.log(err);}
    console.log("server running on port 3000");
})