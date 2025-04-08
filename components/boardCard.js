import styles from "@/css/components/boardCard.module.css";
import Link from "next/link";
import Image from "next/image";
import BoardState from "./boardState";



export default function BoardCard({title, content, createdAt, id, username}) {
    return (
        <Link href={`/board/${id}`}>
            <div className={styles.cardWrap}>
                <div className={styles.imgArea}>
                    <Image src="/board_default.jpg" sizes="100%" fill alt="기본 이미지" priority  />
                </div>
                <div className={styles.textArea}>
                    <strong>{title}</strong>
                    <p>{username}</p>
                    <p>{content}</p>
                    <div className={styles.detail}>
                        <span>{createdAt}</span>
                        <BoardState like="9" see="10" comment="20" />
                    </div>
                </div>
            </div>
        </Link>
    );
}