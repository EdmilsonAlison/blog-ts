import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.tsx";
import {useState} from "react";

interface PropsComment {
    content: string,
    deleteComment: (comment: string) => void
}

export const Comment = (props: PropsComment) => {
    const {content, deleteComment} = props
    function handlerDeleteComment(){
        deleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0)


    function handleLikeComment(){
        setLikeCount((state) => {
            return state +1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/EdmilsonAlison.png" hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eddie Dias</strong>
                            <time title={'11 de Maio às 08:13'} dateTime={'2023-09-19 08:13:30'}>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handlerDeleteComment} title={'Deletar comentário'}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}