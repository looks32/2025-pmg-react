import styles from "@/css/components/input.module.css";

export default function Input({name, type, placeholder, required, error}) {
    return (
        <div className={styles.inputWrap}>
            <input name={name} type={type} placeholder={placeholder} required={required} className={styles.input}/>
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
}