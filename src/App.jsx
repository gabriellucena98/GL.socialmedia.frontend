import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabriellucena98.png',
      name: 'Gabriel Lucena',
      role: 'Software Engineer @ifood'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal, tudo bem?'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return!!! O marinhus é chatinho mas todo mundo ama ele!!'},
      {type: 'link', content: 'gabriel.lucena.backend/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal, Mayk Brito na área!!'},
      {type: 'paragraph', content: 'O que vocês acham de uma live explicando os principais conceitos do React?'},
      {type: 'link', content: 'linkdalive.mayk.com.br'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  );
}

export default App
