import { PrismaClient } from "@prisma/client";
import userAuth from "./auth";

const prisma = new PrismaClient();

class UserFunctions {
  async all() {
    return await prisma.user.findMany();
  }

  async new(username: string, imgUrl: string, email: string, password: string) {
    const userResult = await prisma.user.create({
      data: { username, imgURL: imgUrl },
    });

    return await userAuth.new(email, password, userResult.id);
  }

  async updateProfile(
    userID: number,
    imgURL: string,
    userName: string,
    userBio: string
  ) {
    return await prisma.user.update({
      where: { id: userID },
      data: {
        imgURL,
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
