import { ControllerAction } from '../types/ControllerAction';
import { authServices } from '../services/auth';
import createHttpError from 'http-errors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { secret } = process.env;

const { Unauthorized, BadRequest, NotFound } = createHttpError;

const signUp: ControllerAction = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      next(new BadRequest('Username or password is missing'));

      return;
    }
    const user = await authServices.signUp(req.body);

    res.send(user);
  } catch (error) {
    next(error);
  }
};

const signIn: ControllerAction = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      next(new Unauthorized('Username or password is incorrect'));

      return;
    }

    const checkUser = await authServices.signIn(req.body);

    if (!checkUser) {
      next(new NotFound('User not found'));

      return;
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      checkUser.password,
    );

    if (!passwordIsValid) {
      next(new Unauthorized('Username or password is incorrect'));

      return;
    }

    const token = jwt.sign({ id: checkUser.id }, `${secret}`, {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400,
    });

    res.send({ token });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  signUp,
  signIn,
};
