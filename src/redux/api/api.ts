import axios from "axios";

import type { Post, CreatePostDto, LoginAuthor, CreateAuthorDto } from "@/types/types";

export const baseApi = axios.create({ baseURL: "http://localhost:5004/" });

export const getPostsRequest = async (): Promise<Post[]> => {
  const response = await baseApi.get<Post[]>("/post");
  return response.data;
};

export const createPostRequest = async (dto: CreatePostDto) => {
  const response = await baseApi.post("/post", dto);
  return response.data;
};

export const registerRequest = async (dto: CreateAuthorDto) => {
  const response = await baseApi.post("author/register", dto);
  return response.data;
};

export const logInRequest = async (dto: LoginAuthor) => {
  const response = await baseApi.post("author/login", dto);
  return response.data;
};

