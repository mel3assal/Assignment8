import { Router } from 'express'
import * as ac from './author.controller.js'
const authorRouter=Router()
authorRouter.post('/',ac.createAuthor).get('/',ac.getAllAuthors).get('/:id',ac.getAuthor).put('/:id',ac.updateAuthor).delete('/:id',ac.delteAuthor)
export default authorRouter