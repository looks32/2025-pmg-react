import Image from "next/image";
import styles from "@/css/components/boardProfile.module.css";

export default function BoardProfile({name}) {
    return (
        <div className={styles.profile}>
            <div className={styles.imgWrap}>
                <Image src="/board_profile_default.png" sizes="100%" fill alt="기본 이미지" priority  />
            </div>
            <span>{name}</span>
            <span>2025.03.17</span>
        </div>
    );
}