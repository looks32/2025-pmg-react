import styles from "@/css/components/btn.module.css";

export default function Btn({text, fullWidth = false, line = false, onClick}) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${fullWidth ? styles.fullWidth : ""} ${line ? styles.line : ""}`}>{text}</button>
    );
}