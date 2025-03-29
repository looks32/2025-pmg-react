'use client';

import styles from "@/css/components/moreBtn.module.css";
import Link from "next/link";
import { useState } from "react";

export default function MoreBtn() {

    const [open, setOpen] = useState(false);
    const onOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <div className={styles.moreBtnWrap}>
            <button className={styles.dot} onClick={onOpen}></button>
            {open ? 
            <div className={styles.btnArea}>
                <Link href="">수정하기</Link>
                <button>삭제하기</button>
            </div>
            : ''}
        </div>
    );
}