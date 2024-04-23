import { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPostsRequest } from "@/redux/actions/postActions";
import PostCard from "../components/PostCard/PostCard";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import { LoginModal } from "../components/LoginModal/LoginModal";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const MainPage: FC = () => {
  const [isOpenLoginModal, setModalOpen] = useState(false);

  const dispatch = useAppDispatch(); // связывает redux and react
  const postsData = useAppSelector((state) => state.posts);

  const OpenModal = () => setModalOpen(true);
  const CloseModal = () => setModalOpen(false);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  if (postsData.error)
    return <ErrorComponent value={postsData.error} severity="error" />;
  if (postsData.isLoading) return "Загрузка...";

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="div">
          НОВОСТИ МИРА
        </Typography>
        <div>
        <Button 
        variant="contained"
        onClick={OpenModal}
        >
          Авторизоваться
        </Button>
        {postsData.posts.length === 0 && (
        <ErrorComponent value="There are no posts" severity="info" />
      )}
      {postsData.posts.length > 0 &&
        postsData.posts.map((post) => <PostCard key={post.id} post={post} />)}
      <LoginModal open={isOpenLoginModal} onClose={CloseModal} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainPage;
