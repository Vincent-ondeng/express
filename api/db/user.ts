import { PrismaClient } from "@prisma/client";
import userAuth from "./auth";

const prisma = new PrismaClient();

class UserFunctions {
  async all() {
    return await prisma.user.findMany();
  }

  async new(username: string, email: string, password: string) {
    const userResult = await prisma.user.create({
      data: { username },
    });

    return await userAuth.new(email, password, userResult.id);
  }

  async updateBio(userID: number, userName: string, userBio: string) {
    await prisma.user.update({
      where: { id: userID },
      data: {
        bio: userBio,
        username: userName,
      },
    });
  }

  async single(userID: number) {
    return await prisma.user.findUnique({
      where: { id: userID },
    });
  }
}

const user = new UserFunctions();
export default user;
