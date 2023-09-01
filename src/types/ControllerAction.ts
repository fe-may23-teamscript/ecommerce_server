import { Request, Response } from 'express';

export type ControllerAction = (req: Request, res: Response) => void;
