import Btn from "@/components/btn";
import TitleText from "@/components/titleText";
import Pagination from "@/components/pagination";
import BoardCard from "@/components/boardCard";
import styles from "@/css/board/board.module.css";
import Input from "@/components/input";
import Select from "@/components/select";
import db from "@/lib/db";

export default async function Board() {

  const list = await db.boardData.findMany({
    include: {
      user: true
    }
  });

  return (
    <>
      <TitleText text="일반 게시판"/>

      <div className={styles.boardInfo}>
        <div>총 {list.length}건</div>
        <div className={styles.searchArea}>
          <Select/>
          <form>
            <Input placeholder="검색어를 입력하세요."/>
            <button className={styles.searchBtn}></button>
          </form>
        </div>
      </div>

      <ul className={styles.boardList}>
        {list.map(li => (
          <li key={li.id}>
            <BoardCard title={li.title} content={li.content} createdAt={li.created_at.toLocaleDateString("ko-KR")} id={li.id} username={li.user.username}/>
          </li>
        ))}
      </ul>

      <div className={styles.btnWrap}>
        <Btn href="/board/write" text="글쓰기" />
      </div>

      <Pagination/>
    </>
  );
}
