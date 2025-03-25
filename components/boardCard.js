import styles from "@/css/components/boardCard.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";
import Image from "next/image";



export default function BoardCard() {
    return (
        <Link href="">
            <div className={styles.cardWrap}>
            <div className={styles.imgArea}>
                <Image src="/board_default.jpg" sizes="100%" fill alt="기본 이미지" />
            </div>
            <div className={styles.textArea}>
                <strong>test</strong>
                <p>내용내용내용내용내용내용내용내용내용내용내용내용 내용내용내용내용내용내용내용내용내용 내용내용내용내용내용내용내용내용내용내용</p>
                <div className={styles.detail}>
                    <span>2025.03.17</span>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faThumbsUp} style={{color:"#c0c0c0"}}/> 1
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEye} style={{color:"#c0c0c0"}}/> 1
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCommentDots} style={{color:"#c0c0c0"}}/> 1
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </Link>
    );
}