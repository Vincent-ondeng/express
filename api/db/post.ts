import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

class PostFunctions {
  async all() {
    return await prisma.post.findMany({
      where: { published: true },
    });
  }

  async new(userID: number, postTitle: string, postContent: string) {
    return await prisma.post.create({
      data: { title: postTitle, content: postContent, authorId: userID },
    });
  }

  async singleUser(userID: number) {
    return await prisma.post.findMany({
      where: { authorId: userID },
    });
  }

  async drafts(userID: number) {
    return await prisma.post.findMany({
      where: { published: false, authorId: userID },
    });
  }

  async single(postID: number) {
    return await prisma.post.findUnique({
      where: { id: postID },
      include: {
        author: true,
      },
    });
  }
}

const posts = new PostFunctions();
export default posts;
