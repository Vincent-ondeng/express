import { PrismaClient, UserAuth } from '@prisma/client';
import { checkPwd, hashPwd } from '../utils/hashing';

const prisma = new PrismaClient();

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
    });

    // returns true if the password hashes match
    return checkPwd(String(userDets?.password), password);
  }
}

const userAuth = new Auth();
export default userAuth;
