import { Author } from './../../Database/models/author.model.js';
const createAuthor=async(req,res)=>{
    const author=await Author.insertMany(req.body)
    res.json({message:"Author created successfully",author})
}
const  getAllAuthors=async(req,res)=>{
    const authors=await Author.find()
    res.json({message:"Authors are ",authors})
}
const getAuthor=async(req,res)=>{
    const author=await Author.findById(req.params.id)
    res.json({message:"Author is ",author})
}
const updateAuthor=async(req,res)=>{
    const author=await Author.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:"book",author})
}
const delteAuthor=async(req,res)=>{
    const author=await Author.findByIdAndDelete(req.params.id)
    res.json({message:"book",author})
}

export{createAuthor,getAllAuthors,getAuthor,updateAuthor,delteAuthor}