import { FC, useEffect, useState } from "react";

import { Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPostsRequest } from "@/redux/actions/postActions";
import PostCard from "../components/PostCard/PostCard";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import { LoginModal } from "../components/LoginModal/LoginModal";

const MainPage: FC = () => {
  const [isOpenLoginModal, toggleLoginModal] = useState(false);

  const dispatch = useAppDispatch(); // связывает redux and react
  const postsData = useAppSelector((state) => state.posts);

  const handleOpenLoginModal = () => toggleLoginModal(true);
  const handleCloseLoginModal = () => toggleLoginModal(false);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  if (postsData.error)
    return <ErrorComponent value={postsData.error} severity="error" />;
  if (postsData.isLoading) return "Загрузка...";

  return (
    <main className="wrapper">
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenLoginModal}
      >
        Авторизоваться
      </Button>
      {postsData.posts.length === 0 && (
        <ErrorComponent value="There are no posts" severity="info" />
      )}
      {postsData.posts.length > 0 &&
        postsData.posts.map((post) => <PostCard key={post.id} post={post} />)}
      <LoginModal open={isOpenLoginModal} onClose={handleCloseLoginModal} />
    </main>
  );
};

export default MainPage;
