import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  // console.log(req.body)
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newuser = new User({ username, email, password: hashedPassword });
  try {
    // const existingUsername = await User.findOne({ username });

    // const existingUseremail = await User.findOne({ email });

    // if (existingUsername || existingUseremail) {
    //   // If the username is already taken, send a 409 Conflict response
    //   return res.status(409).json("Username or email already exists.");
    // }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
