import styles from "@/css/components/input.module.css";

export default function Input({placeholder}) {
    return (
        <input placeholder={placeholder} className={styles.input}></input>
    );
}