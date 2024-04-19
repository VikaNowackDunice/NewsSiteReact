interface UserProps {
  id: number,
  name: string,
}

export interface TagProps {
  id: number,
  name: string,
}

export interface PostProps {
  id: string,
  author: UserProps,
  theme: string,
  tags: TagProps[],
  content: string,
  imagePath: string | null
}