import bcrypt from "bcrypt";
import { UserModel } from '../models/index'

const controller = {};

// Create User
controller.register = async (req, res) => {

    UserModel
  
      .find({ email: req.body.email })
  
      .exec()
  
      .then(user => {
  
        if (user.length >= 1) {
  
          return res.status(401).json({
  
            message: "E-mail exists"
  
          });
  
        } else {
  
          bcrypt.hash(req.body.password, 10, async (err, hash) => {
    
            if (err) {
  
              return res.status(500).json({
  
                error: err
  
              });
  
            } else {
  
              const newUser = await UserModel.create({
  
                name: req.body.name,
  
                email: req.body.email,
  
                cpf: req.body.cpf,
  
                password: hash
  
              });
  
              let { password, __v, ...user } = newUser.toObject();
  
              return res.status(201).json({ 
                message: 'User created successful',
                data: { user } 
              });
  
            }
          });
        }
      });
  };


// Get All Users
controller.findAll = async (req, res) => {
    try {
      let users = await UserModel.find();
      return res.status(200).json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.toString() });
    }
  };
  
  //Filter users by CPF, Name or Email
  controller.filter = async (req, res) => {
    try {
      const filters = req.body;

      const users = await UserModel.find({ ...filters });

      res.status(200).send(users)
    } catch(err) {
      res.status(500).send({ error: err.message });
    }
  };
  
  // Update User By ID
  controller.update = async (req, res) => {
    try {
      let user = await UserModel.findById(req.params.userId);
      if (!user) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User not found" });
      }
      Object.assign(user, req.body);
      await user.save();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  };
  
  
  // Delete User By ID
  controller.delete = async (req, res) => {
    try {
      let user = await UserModel.findByIdAndRemove(req.params.userId);
      if (!user) {
        return res
          .status(400)
          .json({ message: "User not found" });
      }
      return res.json({ message: "User deleted successfully!" });
    } catch (error) {c
      return res.status(500).json({ error: error.toString() });
    }
  };
  
  
  export default controller;
