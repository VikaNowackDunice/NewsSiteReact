import defaultImage from '@assets/post_img.jpg';
import Card from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia/CardMedia';

import { cardStyle } from "./style";
import { PostProps } from "./PostProps";

const  PostCard = ({
  author,
  theme,
  content,
  tags,
  imagePath}: PostProps) : JSX.Element => {
    return (
      <Card sx={cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {author.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {theme}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            {tags.map((tag) => <span key={tag.id}>#{tag.name}</span>)}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          height='200'
          image={imagePath || defaultImage}
        />
      </Card>
    );
  };

export default PostCard;
