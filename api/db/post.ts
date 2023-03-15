import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

class PostFunctions {
  // Get all the (published) posts
  async all() {
    return await prisma.post.findMany({
      where: { published: true },
    });
  }

  // Create a new post linked to the userID
  async new(userID: number, postTitle: string, postContent: string) {
    return await prisma.post.create({
      data: { title: postTitle, content: postContent, authorId: userID },
    });
  }

  // Get posts of a single user
  // Can be used when showing a users profile?
  async singleUser(userID: number) {
    return await prisma.post.findMany({
      where: { authorId: userID },
    });
  }

  // Show drafts related to a user
  async drafts(userID: number) {
    return await prisma.post.findMany({
      where: { published: false, authorId: userID },
    });
  }

  // Get a single post
  async single(postID: number) {
    return await prisma.post.findUnique({
      where: { id: postID },
      include: {
        author: true,
        comments: true,
      },
    });
  }

  // Deletes a single post
  async delete(postID: number) {
    return await prisma.post.delete({
      where: { id: postID },
    });
  }
}

const posts = new PostFunctions();
export default posts;
