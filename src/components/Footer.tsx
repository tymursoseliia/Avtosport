import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <div className={styles.logo}>
            SPORT<span className={styles.logoAccent}>TECH</span>
          </div>
          <p className={styles.desc}>
            Надежный пригон автомобилей из Европы в Россию под ключ. Гарантия юридической чистоты и прозрачности сделки.
          </p>
        </div>
        
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Навигация</h4>
          <ul className={styles.footerList}>
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/services">Услуги</Link></li>
            <li><Link href="/about">О компании</Link></li>
            <li><Link href="/calculator">Калькулятор</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Контакты</h4>
          <ul className={styles.footerList}>
            <li><a href="tel:+78000000000" className={styles.contactLink}>8 (800) 000-00-00</a></li>
            <li><a href="mailto:info@sporttech.ru" className={styles.contactLink}>info@sporttech.ru</a></li>
            <li>г. Москва, ул. Примерная, д. 1, офис 100</li>
          </ul>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>Telegram</a>
            <a href="#" className={styles.socialLink}>WhatsApp</a>
          </div>
        </div>
      </div>
      
      <div className={styles.legalInfo}>
        <div className="container">
          <p>ООО «СПОРТТЕХ» | ИНН 1234567890 | ОГРН 1234567890123</p>
          <p>Информация, представленная на сайте, не является публичной офертой.</p>
          <p>&copy; 2023 - {new Date().getFullYear()} SPORTTECH. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
