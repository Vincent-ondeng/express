import { PrismaClient } from "@prisma/client";
import { checkPwd, hashPwd } from "../utils/hashing";

const prisma = new PrismaClient();

class UserFunctions {
  async all() {
    return await prisma.user.findMany();
  }

  async new(email: string, userName: string, password: string) {
    const hashedPwd = await hashPwd(password);

    return await prisma.user.create({
      data: {
        email,
        username: userName,
        password: hashedPwd,
      },
    });
  }

  async login(userEmail: string, password: string): Promise<boolean> {
    // Gets the user details matching the email
    const foundUser = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    return await checkPwd(String(foundUser?.password), password);
  }
}

const user = new UserFunctions();
export default user;
