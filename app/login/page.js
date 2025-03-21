import Btn from "@/components/btn";
import Input from "@/components/input";
import TitleText from "@/components/titleText";
import styles from "@/css/login/login.module.css";

export default function Login() {
  return (
    <>
      <TitleText text="로그인"/>
      <Input placeholder="아이디" error="아이디를 입력해주세요"/>

      <Btn text="확인" fullWidth line/>
    </>
  );
}
