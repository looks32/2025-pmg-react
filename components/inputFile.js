import styles from "@/css/components/inputFile.module.css";

export default function InputFile({inputId}) {
    return (
            <div className={styles.inputFile}>
                <label htmlFor={inputId}>
                    <p>이미지 업로드</p>
                    <div>찾아보기</div>
                </label>
                <input type="file" id={inputId} />
            </div>
    );
}