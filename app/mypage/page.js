import TitleText from "@/components/titleText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import styles from '@/css/mypage/mypage.module.css';
import Btn from "@/components/btn";


export default function Mypage() {
  return (
    <>
      <TitleText text="마이페이지"/>

      <div className={styles.myImgWrap}>
        <div className={styles.myImg}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <button className={styles.editBtn}>
          <FontAwesomeIcon icon={faPen} />
        </button>
      </div>

      <div className={styles.userNameWrap}>
        <h2 className={styles.useName}>홍길동</h2>
        <p className={styles.email}>honghong@gmail.com</p>
      </div>

      <div className={styles.btnWrap}>
        <Btn line text="회원정보 수정"/>
        <Btn line text="비밀번호 변경"/>
        <Btn line text="로그아웃"/>
        <Btn line text="회원탈퇴"/>
      </div>
    </>
  );
}
