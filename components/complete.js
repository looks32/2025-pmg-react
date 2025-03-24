import Btn from "@/components/btn";
import styles from "@/css/components/complete.module.css";

export default function Complete({ id, password, showId, showPassword }) {
  return (
    <div className={styles.completeWrap}>
      <div className={styles.complteArea}>
        {showId && <p>아이디는 <span>{id}</span>입니다.</p>}
        {showPassword && <p>비밀번호는 <span>{password}</span>입니다.</p>}
      </div>

      <Btn text="로그인" />
    </div>
  )
}
