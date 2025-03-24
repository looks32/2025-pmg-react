import Btn from "@/components/btn";
import Input from "@/components/input";
import TitleText from "@/components/titleText";
import styles from "@/css/join/join.module.css";

export default function Join() {
  return (
    <>
      <TitleText text="회원가입"/>

      <Input placeholder="아이디"/>
      <Input placeholder="이메일"/>
      <Input placeholder="비밀번호"/>
      <Input placeholder="비밀번호 확인"/>

      <div className={styles.btnWrap}>
        <Btn text="확인"/>
      </div>
    </>
  );
}
