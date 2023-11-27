import User, { IUser } from "../models/user.model";

class UserService {
  async getAllUsers(): Promise<IUser[]> {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error("Error fetching users");
    }
  }

  async getUserById(userId: string): Promise<IUser | null> {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error("Error fetching user by ID");
    }
  }

  async createUser(userData: IUser): Promise<IUser> {
    const { email } = userData;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User with the provided email already exists");
      }

      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  async updateUser(
    userId: string,
    updatedData: Partial<IUser>
  ): Promise<IUser | null> {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,
      });
      return updatedUser;
    } catch (error) {
      throw new Error("Error updating user");
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      await User.findByIdAndDelete(userId);
    } catch (error) {
      throw new Error("Error deleting user");
    }
  }
}

export default new UserService();
