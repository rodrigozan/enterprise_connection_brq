import express from "express";

import userController from "../controllers/index.js";

const router = express.Router();

router.get("/", function (req, res) {

    res.json({ message: "From index api" });

});

// Create
router.post("/register", userController.register);

//GetAll Data
router.get("/users", userController.findAll);

//Filter
router.post("/users", userController.filter);

//update by ID
router.put("/users/:userId", userController.update);

//Delete by ID
router.delete("/users/:userId", userController.delete);


export default router;
