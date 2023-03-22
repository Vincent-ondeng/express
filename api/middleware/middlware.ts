import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
const tokenSignature = process.env.TOKEN_SIGNATURE;

// Creates a new token for the user
// Token expires in 1 hour
export function signJWT(user: User, signature: string): string {
  return jsonwebtoken.sign(user, signature, {
    expiresIn: 30 * 60,
  });
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    try {
      jsonwebtoken.verify(bearerToken, String(tokenSignature));
      next();
    } catch (error) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
}
