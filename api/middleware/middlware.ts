import { User } from '@prisma/client';
import jsonwebtoken from 'jsonwebtoken';

// Creates a new token for the user
class AuthJWT {
  signJWT(user: User, signature: string): string {
    return jsonwebtoken.sign({ data: user }, signature, {
      expiresIn: 30 * 60,
    });
  }

  verifyJWT(token: string, signature: string): User {
    const jwtData = jsonwebtoken.verify(token, signature) as User;
    return jwtData;
  }
}

const tokenRelated = new AuthJWT();
export default tokenRelated;
