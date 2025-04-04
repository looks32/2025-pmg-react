import Link from "next/link";
import styles from "@/css/components/btn.module.css";

export default function Btn({ text, fullWidth = false, line = false, onClick, href }) {
    const className = `${styles.btn} ${fullWidth ? styles.fullWidth : ""} ${line ? styles.line : ""}`;

    if (href) {
        return (
            <Link href={href} className={className}>
                {text}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
}