import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            SPORT<span className={styles.logoAccent}>TECH</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>Главная</Link></li>
            <li><Link href="/catalog" className={styles.navLink}>Каталог</Link></li>
            <li><Link href="/services" className={styles.navLink}>Услуги</Link></li>
            <li><Link href="/about" className={styles.navLink}>О компании</Link></li>
            <li><Link href="/calculator" className={styles.navLink}>Калькулятор</Link></li>
            <li><Link href="/contacts" className={styles.navLink}>Контакты</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+78000000000" className={styles.phone}>8 (800) 000-00-00</a>
          <a href="#callback" className={`btn btn-primary ${styles.ctaBtn}`}>Заказать звонок</a>
        </div>
      </div>
    </header>
  );
}
