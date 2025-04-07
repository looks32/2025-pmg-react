import Image from "next/image";
import styles from "@/css/board/boardDetail.module.css";
import BoardState from "@/components/boardState";
import BoardProfile from "@/components/boardProfile";
import Like from "@/components/like";
import Textarea from "@/components/textarea";
import Btn from "@/components/btn";
import Pagination from "@/components/pagination";
import MoreBtn from "@/components/moreBtn";
import BoardComment from "@/components/boardComment";
import db from "@/lib/db";

export default async function BoardDetail({ params }) {

  const { id } = await params;

  const post = await db.boardData.findUnique({
    where: {
      id : parseInt(id),
    },
    include: {
      user: true,
    },
  });
  
  return (
    <>
      <div className={styles.imgWrap}>
        <Image src="/board_detail_default.jpg" sizes="100%" fill alt="기본 이미지" />
      </div>
      <div className={styles.titleArea}>
        <strong>{post.title}</strong>
        <div className={styles.titleDetail}>
          <BoardProfile name={post.user.username} />
          <BoardState like="20" see="10" comment="9" />
        </div>
        <div className={styles.moreArea}>
          <MoreBtn/>
        </div>
      </div>
      <div className={styles.contentArea}>
        <p>{post.content}</p>
        <div className={styles.likeArea}>
          <Like/>
        </div>
      </div>
      <div className={styles.commentArea}>
        <Textarea rows="3" placeholder="댓글" />
        <div className={styles.btnArea}>
          <Btn text="확인" />
        </div>

        <div className={styles.commentList}>
          <ul>
            <li>
              <BoardComment/>
            </li>
            <li>
              <BoardComment/>
            </li>
          </ul>
        </div>

        <Pagination/>

      </div>
    </>
  );
}
