import styles from "./Avatar.module.css";
import {ImgHTMLAttributes} from "react";

interface PropsAvatar extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean
}

export const Avatar = ({ ...props}: PropsAvatar) => {
    const {
        hasBorder = true,
    } = props
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
             {...props}
         alt={'Imagem de Perfil'}/>

    )
}