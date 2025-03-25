'use client'
import { useState } from 'react'
import Btn from "@/components/btn";
import Complete from "@/components/complete";
import Input from "@/components/input";
import TitleText from "@/components/titleText";
import styles from "@/css/find/find.module.css";

export default function FindId() {
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === 1) {
      // 여기에 유효성 검사 가능
      setStep(2)
    } else if (step === 2) {
      // 유효성 검사 후
      setStep(3)
    }
  }

  return (
    <>
      <TitleText text="아이디 찾기" />

      {step === 1 && (
        <>
          <Input placeholder="이메일" />

          <div className={styles.btnWrap}>
            <Btn text="확인" onClick={handleNext} />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <Complete id="hello123" showId={true} showPassword={false} />

          <div className={`${styles.btnWrap} ${styles.textCenter}`}>
            <Btn text="로그인" onClick={() => {
            }} />
          </div>
        </>
      )}

    </>
  )
}
