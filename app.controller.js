import { connectDB } from "./src/DataBase/connection.db.js";
import userRouter from "./src/Modules/User/user.controller.js";
import authRouter from "./src/Modules/Auth/auth.controller.js"
import messageRouter from "./src/Modules/Messages/message.controller.js"
import globalError from "./src/utils/error handling/globalHandler.js";
import notFoundHandler from "./src/utils/error handling/notFoundHandler.js";
export const bootstrap = async(app,express)=>{
//  connect to database  
 await connectDB();
 // pares body request 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// indeponit routes 
app.use("/users",userRouter);
// auth router 
app.use("/auth",authRouter)
// message router
app.use("/messages",messageRouter)

// error handel routers
app.all("/",notFoundHandler)
// global error handler
app.use(globalError)
}