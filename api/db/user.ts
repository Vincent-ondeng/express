import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserFunctions {
  async new(email: string, userName: string, password: string): Promise<void> {
    await prisma.user.create({
      data: {
        email,
        username: userName,
        password,
      },
    });
  }
}

const user = new UserFunctions();
export default user;
