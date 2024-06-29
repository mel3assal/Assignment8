import bookRouter from "./src/book/book.routes.js"
import { dbConnection } from './Database/dbConnection.js'
import authorRouter from "./src/author/author.routes.js"
function  bootstrap(app,express){
    app.use(express.json())
    app.use('/book',bookRouter)
    app.use('/author',authorRouter)
    app.use('*',(req,res)=>res.json("routing is not found"))
}
export default bootstrap