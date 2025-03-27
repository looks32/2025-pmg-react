import Btn from "@/components/btn";
import Input from "@/components/input";
import TitleText from "@/components/titleText";
import styles from "@/css/login/login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.loginContent}>
      <div>
        <div className={styles.loginForm}>
          <TitleText text="로그인"/>
          <Input type="text" placeholder="아이디"/>
          <Input type="password" placeholder="비밀번호"/>

          <Btn text="로그인" fullWidth/>
        </div>
        <ul className={styles.loginInfo}>
          <li>
            <Link href="">아이디 찾기</Link>
          </li>
          <li>
            <Link href="">비밀번호 찾기</Link>
          </li>
          <li>
            <Link href="">회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
