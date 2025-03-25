import Btn from "@/components/btn";
import TitleText from "@/components/titleText";
import Pagination from "@/components/pagination";
import BoardCard from "@/components/boardCard";
import styles from "@/css/board/board.module.css";
import Input from "@/components/input";

export default function Board() {
  return (
    <>
      <TitleText text="일반 게시판"/>

      <div>
        <div>총 4건</div>
        <div>
          <select>
            <option>aa</option>
          </select>
          <form>
            <Input/>
            <button>검색</button>
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
