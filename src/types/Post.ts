export type Author = {
  id: number;
  email: string;
};

export type Tag = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  author: Author;
  theme: string;
  tags: Tag[];
  content: string;
  imagePath: string;
};

export type CreatePostDto = {
  content: string;
  theme: string;
  id: number;
  img: string;
  userId: number
};
