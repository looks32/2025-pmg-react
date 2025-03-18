import styles from "@/css/components/btn.module.css";

export default function Btn({text}) {
    return (
        <button className={styles.btn}>{text}</button>
    );
}