// ==================== authorization ====================
 const authorization=(roles=[])=>{
    return (req,res,next)=>{
    const {user}=req
  
    if(!roles.includes(user.role)){
    return next (new Error("forbidden access endpoined not allowed"),{case:403})
    }
return next()
}
 }


export default authorization





