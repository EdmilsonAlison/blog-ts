import styles from './Sidebar.module.css'
import {PencilLine } from 'phosphor-react'
import {Avatar} from "./Avatar.tsx";
export const SideBar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                alt={"Capa do usuário"}
            />
            <div className={styles.profile}>
              <Avatar src={'https://github.com/EdmilsonAlison.png'}/>
                <strong>Eddie Dias</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}