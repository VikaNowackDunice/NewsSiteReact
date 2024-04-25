import { FC, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPostsRequest } from "@/redux/actions/postActions";
import PostCard from "../components/PostCard/PostCard";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import { LoginModal, RegisterModal } from "../components/LoginModal/AuthModal";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const MainPage: FC = () => {
  const [isOpenLoginModal, setModalOpen] = useState(false);
  const [isOpenRegisterModal, setRegModalOpen] = useState(false);


  const dispatch = useAppDispatch(); // связывает redux and react
  const postsData = useAppSelector((state) => state.posts);

  const OpenRegModal = () => setRegModalOpen(true);
  const CloseRegModal = () => setRegModalOpen(false);
  const OpenModal = () => setModalOpen(true);
  const CloseModal = () => setModalOpen(false);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  if (postsData.error)
    return <ErrorComponent value={postsData.error} severity="error" />;
  if (postsData.isLoading) return "Загрузка...";

  return (
    <><AppBar style={{ position: 'fixed', height: '70px', top: 0}}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h3" component="div">
          НОВОСТИ МИРА
        </Typography>
        <div>
          <Button
            variant="contained"
            onClick={OpenRegModal}
          >
            Зарегистрироваться
          </Button>
          {postsData.posts.length === 0 && (
            <ErrorComponent value="There are no posts" severity="info" />
          )}
        </div>
        <div>
          <Button
            variant="contained"
            onClick={OpenModal}
          >
            Войти в аккаунт
          </Button>
          {postsData.posts.length === 0 && (
            <ErrorComponent value="There are no posts" severity="info" />
          )}
        </div>
      </Toolbar>

    </AppBar>
    <Box>
      <RegisterModal open={isOpenRegisterModal} onClose={CloseRegModal} />
    </Box>
    <Box>
      {postsData.posts.length > 0 &&
        postsData.posts.map((post) => <PostCard key={post.id} post={post} />)}
      <LoginModal open={isOpenLoginModal} onClose={CloseModal} />
    </Box></>
  );
};

export default MainPage;
