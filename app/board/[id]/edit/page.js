import Btn from "@/components/btn";
import Input from "@/components/input";
import InputFile from "@/components/inputFile";
import Textarea from "@/components/textarea";
import TitleText from "@/components/titleText";
import styles from "@/css/board/boardWrite.module.css";


export default function BoardEdit() {
  return (
    <>
      <div>
        <TitleText text="게시글 수정" />
        <Input type="text" placeholder="제목" value="asdasd" />
        <InputFile inputId="file1" />
        <Textarea placeholder="내용" rows="22"/>
        <div className={styles.btnArea}>
          <Btn text="확인" />
        </div>
      </div>
    </>
  );
}
