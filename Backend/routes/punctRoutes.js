import express from "express";
import punctController from "../controllers/punctControllers.js"
import requestMiddleware from "../middleware/requestMiddleware.js"
import validationMiddleware from "../middleware/validationMiddleware.js"
import { check } from "express-validator"

const router = express.Router()

router.route('/')
    .get(requestMiddleware, punctController.getPuncte)
    .post([
        check("Denumire", "Denumire invalida").exists(),
        check("CoordonataX", "CoordonataX invalida").isNumeric(),
        check("CoordonataY", "CoordonataY invalida").isNumeric(),
        check("EsteVizibil", "Valoare pentru EsteVizibil invalida").isBoolean()     
    ], validationMiddleware, requestMiddleware, punctController.addPunct)

router.route('/:id')
    .get(requestMiddleware, punctController.getPunct)
    .patch(requestMiddleware, punctController.updatePunct)
    .delete(requestMiddleware, punctController.deletePunct)

export default router