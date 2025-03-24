'use client'
import { useState } from 'react'
import Btn from '@/components/btn'
import Complete from '@/components/complete'
import Input from '@/components/input'
import TitleText from '@/components/titleText'
import styles from '@/css/find/find.module.css'

export default function FindPassword() {
  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    userId: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === 1) {
      // 여기에 유효성 검사 가능
      setStep(2)
    } else {
      // 최종 제출 처리 (예: API 호출)
      console.log('비밀번호 변경 요청:', form)
    }
  }

  return (
    <>
      <TitleText text="비밀번호 찾기" />

      {step === 1 && (
        <>
          <Input
            name="userId"
            placeholder="아이디"
            value={form.userId}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
          />
        </>
      )}

      {step === 2 && (
        <>
          <Input
            name="password"
            type="password"
            placeholder="새 비밀번호"
            value={form.password}
            onChange={handleChange}
          />
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            value={form.passwordConfirm}
            onChange={handleChange}
          />
        </>
      )}

      <div className={styles.btnWrap}>
        <Btn text={step === 1 ? '다음' : '비밀번호 변경'} onClick={handleNext} />
      </div>

      {/* 결과 확인용 */}
      <Complete password="pass456" showId={false} showPassword={true} />
    </>
  )
}
