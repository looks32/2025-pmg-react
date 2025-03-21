import Btn from "@/components/btn";
import Input from "@/components/input";
import styles from "@/css/login/login.module.css";

export default function Login() {
  return (
    <div>
      <div className={styles.login}>로그인</div>
      <Input placeholder="아이디" error="아이디를 입력해주세요"/>

      <Btn text="확인"/>
    </div>
  );
}
