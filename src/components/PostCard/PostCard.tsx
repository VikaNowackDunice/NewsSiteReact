import { FC } from 'react';
import Card from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia/CardMedia';

import type { Post } from "@/types/Post";

import { cardStyle } from "@/components/PostCard/style";

type PostCardProps = {
  post: Post,
};

const  PostCard: FC<PostCardProps> = ({ post }) => {
    return (
      <Card sx={cardStyle}>
        <CardContent>
            <CardMedia
              component='img'
              height='100'
              style={{ maxWidth: '100px', width: '100%' }}
              image={post.user.img}
            />
          <Typography gutterBottom variant="body2" component="div">
            {post.user?.login}
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
        <CardMedia
          component='img'
          height='400'
          style={{ maxWidth: '650px', width: '100%' }}
          image={post.img}
        />
      </Card>
    );
  };

export default PostCard;
