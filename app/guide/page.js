'use client';
import Btn from "@/components/btn";
import Input from "@/components/input";
import TitleText from "@/components/titleText";

export default function Guide() {
  return (
    <div>
      <h2>타이틀</h2>
      <TitleText text="제목"/>

      <h2>버튼</h2>
      <Btn text="버튼"/>
      <Btn text="버튼" line />
      <Btn text="버튼" fullWidth href="/login"/>

      <h2>인풋</h2>
      <Input placeholder="내용을 입력해주세요" error="내용을 입력하지 않았습니다."/>

      <style jsx>{`
        h2 {
          font-size: 18px;
          margin: 70px 0 20px;
        }
      `}</style>
    </div>
  );
}
