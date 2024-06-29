import * as bc from './book.controller.js'
import { Router  } from 'express'
const bookRouter=Router();
bookRouter.post('/',bc.createBook).get('/',bc.getAllBooks).get('/:id',bc.getBook).put('/:id',bc.updateBook).delete('/:id',bc.delteBook)
export  default bookRouter