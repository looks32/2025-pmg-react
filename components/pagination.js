import styles from "@/css/components/pagination.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";



export default function Pagination() {
    return (
        <ul className={styles.list}>
            <li>
                <Link href="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
            </li>
            <li className={styles.active}>
                <Link href="/">1</Link>
            </li>
            <li>
                <Link href="/">2</Link>
            </li>
            <li>
                <Link href="/">3</Link>
            </li>
            <li>
                <Link href="/">
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </li>
        </ul>
    );
}