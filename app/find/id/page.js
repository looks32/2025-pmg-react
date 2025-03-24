import Btn from "@/components/btn";
import Complete from "@/components/complete";
import Input from "@/components/input";
import TitleText from "@/components/titleText";
import styles from "@/css/find/find.module.css";

export default function FindId() {
  return (
    <>
      <TitleText text="아이디 찾기" />

      <Input placeholder="이메일" />

      <div className={styles.btnWrap}>
        <Btn text="확인" />
      </div>

      <Complete id="hello123" showId={true} showPassword={false} />
    </>
  )
}
