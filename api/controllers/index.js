import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from '../models/index'

const controller = {};

// Create User
controller.register = async (req, res, next) => {

    UserModel
  
      .find({ email: req.body.email })
  
      .exec()
  
      .then(user => {
  
        if (user.length >= 1) {
  
          return res.status(httpStatus.CONFLICT).json({
  
            message: "Mail exists"
  
          });
  
        } else {
  
          bcrypt.hash(req.body.password, 10, async (err, hash) => {
  
            console.log(hash);
  
            if (err) {
  
              return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
  
                error: err
  
              });
  
            } else {
  
              const newUser = await UserModel.create({
  
                name: req.body.name,
  
                address: req.body.address,
  
                email: req.body.email,
  
                country: req.body.country,
  
                phone: req.body.phone,
  
                password: hash
  
              });
  
              let { password, __v, ...user } = newUser.toObject();
  
              return res.status(httpStatus.CREATED).message('User created successful').json({ data: { user } });
  
            }
          });
        }
      });
  };


// Get All Users
controller.findAll = async (req, res) => {
    try {
      let users = await UserModel.find();
      return res.json(users);
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.toString() });
    }
  };
  
  
  // Get User By ID
  controller.findOne = async (req, res) => {
    try {
      let user = await UserModel.findById(req.params.userId);
      if (!user) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.toString() });
    }
  };

   // Get User By Email
   controller.findByEmail = async (req, res) => {
    try {
      let user = await UserModel.findOne({email: req.params.email});
      if (!user) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.toString() });
    }
  };

   // Get User By Name
   controller.findByName = async (req, res) => {
    try {
      let user = await UserModel.findOne({name: req.params.name});
      if (!user) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User not found" });
      }
      return res.status(200).json(user)
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.toString() });
    }
  };

   // Get User By CPF
   controller.findByCpf = async (req, res) => {
    try {
      let user = await UserModel.findOne({cpf: req.params.cpf});
      if (!user) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User not found" });
      }
      return res.status(200).json(user)
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.toString() });
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
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User not found" });
      }
      return res.json({ message: "User deleted successfully!" });
    } catch (error) {c
      return res.status(500).json({ error: error.toString() });
    }
  };
  
  
  export default controller;