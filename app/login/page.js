import Btn from "@/components/btn";
import Input from "@/components/input";
import TitleText from "@/components/titleText";
import styles from "@/css/login/login.module.css";
import Link from "next/link";

export default function Login() {
  async function handleForm(formData) {
    "use server";
    console.log(formData.get("email"), formData.get("password"));
    console.log("i run in the server baby!");
  }
  return (
    <div className={styles.loginContent}>
      <div>
        <div className={styles.loginForm}>
          <TitleText text="로그인"/>
          <form action={handleForm}>
            <Input name="id" type="text" placeholder="아이디" required="required"/>
            <Input name="password" type="password" placeholder="비밀번호" required="required"/>

            <Btn text="로그인" fullWidth/>
          </form>
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