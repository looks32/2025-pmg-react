import styles from "@/css/components/boardState.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";

export default function BoardState({like, see, comment}) {
    return (
        <ul className={styles.state}>
            <li>
                <FontAwesomeIcon icon={faThumbsUp} style={{color:"#c0c0c0"}}/> {like}
            </li>
            <li>
                <FontAwesomeIcon icon={faEye} style={{color:"#c0c0c0"}}/> {see}
            </li>
            <li>
                <FontAwesomeIcon icon={faCommentDots} style={{color:"#c0c0c0"}}/> {comment}
            </li>
        </ul>
    );
}