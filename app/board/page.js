import Btn from "@/components/btn";
import TitleText from "@/components/titleText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export default function Board() {
  return (
    <>
      <TitleText text="제목"/>
      <div>board</div>
      <Btn text="게시판 버튼"/>
      <FontAwesomeIcon icon={faArrowRight} />
    </>
  );
}
