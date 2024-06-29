import { Book } from './../../Database/models/book.model.js';
const createBook=async(req,res)=>{
    const book=await Book.insertMany(req.body)
    res.json({message:"book created successfully",book})
}
const  getAllBooks=async(req,res)=>{
    const books=await Book.find()
    res.json({message:"books are ",books})
}
const getBook=async(req,res)=>{
    const book=await Book.findById(req.params.id)
    res.json({message:"book is ",book})
}
const updateBook=async(req,res)=>{
    const book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:"book",book})
}
const delteBook=async(req,res)=>{
    const book=await Book.findByIdAndDelete(req.params.id)
    res.json({message:"book",book})
}

export{createBook,getAllBooks,getBook,updateBook,delteBook}