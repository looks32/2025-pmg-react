import styles from "@/css/components/boardComment.module.css";
import MoreBtn from "./moreBtn";
import BoardProfile from "./boardProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";

export default function BoardComment() {
    return (
        <div className={styles.commentArea}>
            <div className={styles.titleArea}>
                <BoardProfile name="김길동" />
                <button>
                    <FontAwesomeIcon icon={faThumbsUp} />25
                </button>
            </div>
            <div className={styles.textArea}>
                <p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
                <button>더보기 +</button>
            </div>
            <div className={styles.moreBtnArea}>
                <MoreBtn />
            </div>
        </div>
    );
}