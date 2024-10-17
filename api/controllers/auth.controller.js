import { errorHandler } from "../utils/error.js";
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Password not matching",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    // Find existing user if exists
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // password => password + salt(10...15) => hashedPassword
    const hashedPassword = await bcryptjs.hash(password, 10);
    // compare
    // console.log(hashedPassword);
    // console.log("Creating user data");
    // user save in database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // console.log("Adding user to DB");
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
    // console.log("User added to DB");
  } catch (error) {
    next(errorHandler(error));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // return res.status(200).json({message:"Start sign in"});

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECTET);

    // console.log("JSON web Token : ",token);

    // pass the pasword menas to not include it in the response
    const { password: pass, ...rest } = user._doc;
    // console.log(user._doc);

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  
    } catch (error) {
    next(errorHandler(error));
  }
};
