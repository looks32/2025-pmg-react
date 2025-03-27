import styles from "@/css/components/textarea.module.css";

export default function Textarea({placeholder, rows}) {
    return (
            <textarea className={styles.textarea} placeholder={placeholder} rows={rows}/>
    );
}