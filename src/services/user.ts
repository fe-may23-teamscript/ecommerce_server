import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import { UserAttributes } from '../types/User';

const signUp = async (user: UserAttributes) => {
  const { username, password } = user;
  const newUser = await User.create({
    username,
    password: bcrypt.hashSync(password, 8),
  });

  return newUser;
};

const signIn = async (user: UserAttributes) => {
  const checkUser = await User.findOne({
    where: {
      username: user.username,
    },
  });

  return checkUser;
};

const getUserById = async (userId: string) => {
  const user = await User.findByPk(userId);

  return user;
};

export const userService = {
  signUp,
  signIn,
  getUserById,
};
