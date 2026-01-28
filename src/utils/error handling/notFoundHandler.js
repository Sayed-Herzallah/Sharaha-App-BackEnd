// ================= notFoundHandler ====================
const notFoundHandler = (req,res,next)=>{
  next(new Error("not found eror handling"),{case:404})
}

export default notFoundHandler