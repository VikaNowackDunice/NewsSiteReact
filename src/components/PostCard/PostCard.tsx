import { FC } from 'react';
import Card from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia/CardMedia';

import type { Post } from "@/types/Post";

import { cardStyle } from "./style";

type PostCardProps = {
  post: Post,
};

const  PostCard: FC<PostCardProps> = ({ post }) => {
    return (
      <Card sx={cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.author.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {post.theme}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            {post.content}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            {post.tags.map((tag) => <span key={tag.id}>#{tag.name}</span>)}
          </Typography>
        </CardContent>
        {!!post.imagePath && <CardMedia
          component='img'
          height='200'
          image={post.imagePath}
        />}
      </Card>
    );
  };

export default PostCard;
