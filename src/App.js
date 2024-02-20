import React, { useState } from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import { postsArray } from './data/data';

export default function App() {
  const [posts, setPosts] = useState(postsArray);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id ))
  }

  return (
    <div className="App">
      <Header />
      
      <section>
        <MyButton onClick={() => setModal(true)}>Add post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <hr style={{marginTop: '1rem', marginBottom: '1rem'}}/>
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts list'}/>
      </section>
    </div>
  );
}
