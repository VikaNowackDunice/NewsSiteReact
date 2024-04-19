import * as React from 'rect';
import { useEffect } from 'react';
import PostCard from '../components/PostCard/PostCard';
// import { postsRequested } from '@redux/actions/posts';
import { useAppDispatch, useAppSelector } from '@hooks';

// import CircularComponent from '../components/CircularComponent/CircularComponent';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import { PostProps } from '../components/PostCard/PostProps';

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error =useAppSelector((state) => state.posts?.error);

  // useEffect(() => {
  //   dispatch(postsRequested());
  // }, [])

  // if(isLoading) return <CircularComponent />;

  if(error) return <ErrorComponent value={error} severity='error' />;
  
  return (
    <main className='wrapper'>
      {posts.length ===0 && <ErrorComponent value='There are no posts' severity='info'/>}
      {posts.length >0 &&
        posts.map((post: PostProps) =>{
          <PostCard
            key={post.id}
            author={post.author}
            theme={post.theme}
            content={post.content}
            tags={post.tags}
            imagePath={post.imagePath}
          />
        })
      }
    </main>
  );
};

export default MainPage;