import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {v4 as uuidv4} from 'uuid'

import styles from './Post.module.css';
import {Comment} from "./Comment.tsx";
import {Avatar} from "./Avatar.tsx";
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface PostType {
    id: number,
    author: Author,
    publishedAt: Date,
    content: Content[]
}

interface PostProps {
    post: PostType
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

export const Post = (props: PostProps) => {
    const {author,content,publishedAt} = props.post
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const [comments, setComments] = useState(['Post muito bacana, hein!!!'])
    const [newCommentText, setNewCommentText] = useState('')

    function handlerCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handlerNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={uuidv4()}><a href={'#'}>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handlerCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name={'comment'}
                    placeholder={'Deixe um comentário'}
                    onChange={handleNewCommentChange}
                    onInvalid={handlerNewCommentInvalid}
                    value={newCommentText}
                    required
                />
                <footer>
                    <button type={"submit"} disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment}
                        content={comment}
                        deleteComment={deleteComment}
                    />
                })}
            </div>
        </article>
    )
}