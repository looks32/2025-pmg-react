import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";
import styles from "@/css/components/like.module.css";

export default function Like() {
    return (
        <div className={styles.likeArea}>
            <button className={styles.like}>
                <FontAwesomeIcon icon={faThumbsUp}/>
            </button>
            <button className={styles.unLike}>
                <FontAwesomeIcon icon={faThumbsDown}/>
            </button>
        </div>
    );
}