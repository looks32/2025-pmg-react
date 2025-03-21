import Btn from "@/components/btn";
import Input from "@/components/input";
import TitleText from "@/components/titleText";
import styles from "@/css/login/login.module.css";

export default function Login() {
  return (
    <div className={styles.loginContent}>
      <div>
        <TitleText text="로그인"/>
        <Input placeholder="아이디"/>
        <Input placeholder="비밀번호"/>

        <Btn text="확인" fullWidth/>
      </div>
    </div>
  );
}
