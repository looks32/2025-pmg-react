import Btn from "@/components/btn";
import TitleText from "@/components/titleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";
import Link from "next/link";
import Pagination from "@/components/pagination";


export default function Board() {
  return (
    <>
      <TitleText text="일반 게시판"/>
      <div>board</div>

      <Link href="/board/123">링크 123</Link>

      <Btn text="글쓰기"/>

      <FontAwesomeIcon icon={faThumbsUp} style={{color:"#c0c0c0"}} />
      <FontAwesomeIcon icon={faThumbsDown} style={{color: "#c0c0c0"}} />

      <Pagination/>
    </>
  );
}
