import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { IUser } from "../models/user.model";

export const generateToken = (user: IUser) => {
  const payload = {
    userId: user._id,
  };

  // Secret key for signing the token (keep it secret and secure)
  const secretKey = JWT_SECRET;

  const options = {
    expiresIn: "30d", // Token will expire in 30 days
  };

  // Generate the JWT token
  const token = jwt.sign(payload, secretKey, options);

  return token;
};
