import styles from "@/css/components/input.module.css";

export default function Input({placeholder, error}) {
    return (
        <div className={styles.inputWrap}>
            <input placeholder={placeholder} className={styles.input}/>
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
}