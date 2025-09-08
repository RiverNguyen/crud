import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  getPosts() {
    return this.prisma.post.findMany();
  }

  createPost(body: { title: string; content: string; authorId: number }) {
    return this.prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId,
      },
    });
  }

  getPost(id: string) {
    return `Post ${id}`;
  }

  updatePost(id: string, body: { title: string; content: string }) {
    return {
      id,
      title: body.title,
      content: body.content,
      updatedAt: new Date(),
    };
  }

  deletePost(id: string) {
    return {
      id,
      deletedAt: new Date(),
    };
  }
}
