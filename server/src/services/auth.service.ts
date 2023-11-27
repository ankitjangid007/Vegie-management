import bcrypt from "bcrypt";
import User, { IUser } from "../models/user.model";
import { generateToken } from "../utils/generateToken";

class AuthService {
  async registerUser(userData: IUser): Promise<{ user: IUser }> {
    const { password, ...userWithoutPassword } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      ...userWithoutPassword,
      password: hashedPassword,
    });

    return { user: newUser };
  }

  async loginUser(
    email: string,
    password: string
  ): Promise<{ user: IUser; token: string } | null> {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user);
      return { user, token };
    }

    return null;
  }
}

export default new AuthService();
