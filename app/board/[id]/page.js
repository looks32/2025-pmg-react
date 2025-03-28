import Image from "next/image";
import styles from "@/css/board/boardDetail.module.css";
import BoardState from "@/components/boardState";
import BoardProfile from "@/components/boardProfile";
import Like from "@/components/like";
import Textarea from "@/components/textarea";
import Btn from "@/components/btn";
import Pagination from "@/components/pagination";


export default function BoardDetail() {
  return (
    <>
      <div className={styles.imgWrap}>
        <Image src="/board_detail_default.jpg" sizes="100%" fill alt="기본 이미지" />
      </div>
      <div className={styles.titleArea}>
        <strong>test</strong>
        <div className={styles.titleDetail}>
          <BoardProfile name="홍길동" />
          <BoardState like="20" see="10" comment="9" />
        </div>
      </div>
      <div className={styles.contentArea}>
        <p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
        <div className={styles.likeArea}>
          <Like/>
        </div>
      </div>
      <div className={styles.commentArea}>
        <Textarea rows="3" placeholder="댓글" />
        <div className={styles.btnArea}>
          <Btn text="확인" />
        </div>

        <Pagination/>
      </div>
    </>
  );
}
