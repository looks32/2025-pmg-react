
import React from 'react'
import Link from 'next/link';
import styles from "@/css/components/header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from "@fortawesome/free-solid-svg-icons/faFire";


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.in}>
            <h1>
                <FontAwesomeIcon icon={faFire} />
            </h1>

            <ul className={styles.nav}>
                <li><Link href="/board">게시판</Link></li>
                <li><Link href="/mypage">마이페이지</Link></li>
            </ul>
        </div>
    </div>
  )
}