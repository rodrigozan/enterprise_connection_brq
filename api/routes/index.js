import express from "express";

import userController from "../controllers/index";

const router = express.Router();

router.get("/", function (req, res, next) {

    res.json({ message: "from index api" });

});


// Create
router.post("/register", userController.register)


//GetAll Data
router.get("/users", userController.findAll)


//GetBy ID
router.get("/users/:userId", userController.findById)

//GetBy Name
router.get("/users/:name", userController.findByName)

//GetBy Email
router.get("/users/:email", userController.findByEmail)

//GetBy CPF
router.get("/users/:cpf", userController.findByCpf)

//update by ID
router.put("/users/:userId", userController.update)


//Delete
router.delete("/users/:userId", userController.delete)


export { router };
