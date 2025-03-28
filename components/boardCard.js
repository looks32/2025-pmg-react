import styles from "@/css/components/boardCard.module.css";
import Link from "next/link";
import Image from "next/image";
import BoardState from "./boardState";



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
                    <BoardState like="9" see="10" comment="20" />
                </div>
            </div>
            </div>
        </Link>
    );
}