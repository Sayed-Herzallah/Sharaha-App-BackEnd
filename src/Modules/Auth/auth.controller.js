// ================== import modules ============================
import { Router } from "express";
import * as authServices from "./auth.service.js";
import validation from "../../middelware/validation.middelware.js" ;
import { asyncHandler } from "../../utils/error handling/asyncHandler.js";
import * as authSchemas from "./auth.validation.js"
// ================== Router Auth ============================
const router = Router()
// ================== Register ============================
router.post("/register",validation(authSchemas.register),asyncHandler(authServices.register))
// ================== Login ============================
router.post("/login",validation(authSchemas.login),asyncHandler(authServices.login))
// ================== Verify ============================
router.get("/verify/:token",asyncHandler(authServices.verify))



export default router 



