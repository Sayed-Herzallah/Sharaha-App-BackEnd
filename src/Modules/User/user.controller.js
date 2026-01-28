// =================== import modules ============================
import { Router } from "express";
import * as userService from "./user.service.js";
import isAuthentcation from "../../middelware/authentcation.middelware.js";
import { asyncHandler } from "../../utils/error handling/asyncHandler.js";
import authorization from "../../middelware/authorization.middelware.js";
import * as messageSchema from "../../DataBase/Models/message.model.js";
import validation from './../../middelware/validation.middelware.js';
import * as userSchema from "./user.validation.js";
import { userEndPoint } from "./user.endpoined.js";

// =================== Router User ============================
const router = Router()
// get profile
router.get("/profile", isAuthentcation, authorization(userEndPoint.profile), asyncHandler(userService.profile))

// update profile
router.patch("/", isAuthentcation, authorization(userEndPoint.updateProfile), validation(userSchema.updateProfile), asyncHandler(userService.updateProfile))
// update password
router.patch("/password", isAuthentcation, authorization(userEndPoint.updatePassword), validation(userSchema.updatePassword), asyncHandler(userService.updatePassword))
// soft delete
router.delete("/", isAuthentcation, authorization(userEndPoint.deleteProfile), asyncHandler(userService.softDeleted))
export default router;



