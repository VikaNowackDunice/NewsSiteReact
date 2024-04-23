export type Author = {
  id: number;
  login: string;
  img: string;
};

export type Tag = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  user: Author;
  theme: string;
  tags: Tag[];
  content: string;
  img: string;
};

export type CreatePostDto = {
  content: string;
  theme: string;
  id: number;
  img: string;
  userId: number
};
