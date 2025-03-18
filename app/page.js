import Btn from "@/components/btn"
import styles from "@/css/main.module.css";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>header</header>
      <main className={styles.main}>main</main>
      <footer className={styles.footer}>footer</footer>
      <Btn text="button"/>
    </div>
  );
}
