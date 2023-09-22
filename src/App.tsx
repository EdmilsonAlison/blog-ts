import {Header} from "./components/Header.tsx";
import {SideBar} from "./components/SideBar.tsx";
import {Post, PostType} from "./components/Post.tsx";

import './global.css'
import styles from './App.module.css'



const posts : PostType[] = [
    {
        id:1,
        author: {
            avatarUrl: 'https://github.com/EdmilsonAlison.png',
            name: 'Edmilson Alison',
            role: 'Developer'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-09-19 20:00:00'),
    } ,
    {
        id:2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Ferandes',
            role: 'CTO @RocketSeat'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-09-20 20:00:00'),
    }
];


export function App() {

    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
            <SideBar/>
                <main>
                    {posts.map(post => {
                        return <Post key={post.id}
                            post={post}
                        />
                    })}
                </main>
            </div>
        </>
    )
}

