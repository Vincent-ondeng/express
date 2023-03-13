import { PrismaClient } from "@prisma/client";
import { hashPwd } from "../utils/hashing";

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

  async login(email: string, password: string) {}
}

const user = new UserFunctions();
export default user;
