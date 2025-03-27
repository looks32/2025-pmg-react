import Btn from "@/components/btn";
import TitleText from "@/components/titleText";
import Pagination from "@/components/pagination";
import BoardCard from "@/components/boardCard";
import styles from "@/css/board/board.module.css";
import Input from "@/components/input";
import Select from "@/components/select";

export default function Board() {
  return (
    <>
      <TitleText text="일반 게시판"/>

      <div className={styles.boardInfo}>
        <div>총 4건</div>
        <div className={styles.searchArea}>
          <Select/>
          <form>
            <Input placeholder="검색어를 입력하세요."/>
            <button className={styles.searchBtn}></button>
          </form>
        </div>
      </div>

      <ul className={styles.boardList}>
        <li>
          <BoardCard/>
        </li>
        <li>
          <BoardCard/>
        </li>
      </ul>

      <div className={styles.btnWrap}>
        <Btn text="글쓰기"/>
      </div>

      <Pagination/>
    </>
  );
}
