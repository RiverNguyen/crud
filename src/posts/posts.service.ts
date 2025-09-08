import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts() {
    return 'Posts';
  }

  createPost(body: { title: string; content: string }) {
    return {
      title: body.title,
      content: body.content,
    };
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
