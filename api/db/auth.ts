import { PrismaClient, User } from '@prisma/client';
import tokenRelated from '../middleware/middlware';
import { checkPwd, hashPwd } from '../utils/hashing';
require('dotenv').config();
const prisma = new PrismaClient();

const signature = process.env.TOKEN_SIGNATURE;
class Auth {
  // Creates a new user auth object referencing a specific userID
  async new(email: string, password: string, userID: number) {
    password = await hashPwd(password);

    return await prisma.userAuth.create({
      data: {
        email,
        password,
        userId: userID,
      },
    });
  }
  async login(email: string, password: string) {
    // Find the user matching the email used to login
    const userDets = await prisma.userAuth.findUnique({
      where: { email },
      include: { User: true },
    });

    // returns true if the password hashes match
    const status = await checkPwd(String(userDets?.password), password);
    const userData: User = {
      id: Number(userDets?.User.id),
      username: String(userDets?.User.username),
      bio: String(userDets?.User.bio),
    };
    if (status) {
      if (signature != 'undefined') {
        return tokenRelated.signJWT(userData, String(signature));
      }
    }
  }
}

const userAuth = new Auth();
export default userAuth;
