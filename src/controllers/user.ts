import { ControllerAction } from '../types/ControllerAction';
import { userService } from '../services/user';
import createHttpError from 'http-errors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cache from '../middleware/cache';

const { secret } = process.env;

const { Unauthorized, BadRequest, NotFound } = createHttpError;

const signUp: ControllerAction = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      next(new BadRequest('Username or password is missing'));

      return;
    }
    const user = await userService.signUp(req.body);

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

    const checkUser = await userService.signIn(req.body);

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

    cache.set(token, 'logout', 86400);

    res.send({ token });
  } catch (error) {
    next(error);
  }
};

const profile: ControllerAction = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.userId);

    res.send({
      username: user?.username,
      create: user?.createdAt,
      update: user?.updatedAt,
    });
  } catch (error) {
    next(error);
  }
};

const signOut: ControllerAction = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';

    const [, token] = authHeader.split(' ');
    cache.del(token);

    res.send({ msg: 'logout' });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  signUp,
  signIn,
  profile,
  signOut,
};
