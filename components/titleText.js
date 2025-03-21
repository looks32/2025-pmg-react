import styles from "@/css/components/titleText.module.css";

export default function TitleText({text}) {
    return (
        <h2 className={styles.title}>{text}</h2>
    );
}