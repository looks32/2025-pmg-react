import Btn from "@/components/btn";
import TitleText from "@/components/titleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";


export default function Board() {
  return (
    <>
      <TitleText text="제목"/>
      <div>board</div>
      <Btn text="게시판 버튼"/>
      <FontAwesomeIcon icon={faThumbsUp} style={{color:"#c0c0c0"}}/>
      <FontAwesomeIcon icon={faThumbsDown} style={{color: "#c0c0c0"}} />
    </>
  );
}
