// ================== import modules ============================
import { Router } from "express"
import isAuthentcation from "../../middelware/authentcation.middelware.js";
import validation from './../../middelware/validation.middelware.js';
import authorization from "../../middelware/authorization.middelware.js";
import * as messageSchema from "./message.validation.js";
import { messageEndPoint } from "./message.endpoined.js";
import * as messageServices from "./message.service.js";
import { asyncHandler } from "../../utils/error handling/asyncHandler.js";

// ================== Router Message ============================
const router = Router()
// create message
router.post("/", isAuthentcation, authorization(messageEndPoint.create), validation(messageSchema.createMessage), asyncHandler(messageServices.createMessage))
// get message single
router.get("/:id", isAuthentcation, authorization(messageEndPoint.getSingle), validation(messageSchema.getSingleMessages), asyncHandler(messageServices.getSingleMessages))
// get message all
router.get("/", isAuthentcation, authorization(messageEndPoint.getAll), validation(messageSchema.getAllMessages), asyncHandler(messageServices.getAllMessages))
// update message
router.patch("/:id", isAuthentcation, authorization(messageEndPoint.update), validation(messageSchema.updateMessage), asyncHandler(messageServices.updateMessage))
// delete message
router.delete("/:id", isAuthentcation, authorization(messageEndPoint.delete), validation(messageSchema.deleteMessage), asyncHandler(messageServices.deleteMessage))


export default router