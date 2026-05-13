import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "О компании | Sport-Tech",
  description: "Надежный партнер по пригону автомобилей из Европы. Работаем официально, по договору. Гарантия юридической чистоты.",
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.aboutHero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="section-title">О компании SPORT<span style={{ color: 'var(--accent-orange)' }}>TECH</span></h1>
          <p className="section-subtitle">Мы делаем покупку автомобиля в Европе безопасной, понятной и выгодной.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className={styles.twoCols}>
            <div className={styles.colText}>
              <h2>Наша миссия</h2>
              <p>Мы создали компанию SPORTTECH в 2023 году с одной целью — предоставить клиентам из России возможность приобретать качественные европейские автомобили без рисков и бюрократии.</p>
              <p>Рынок пригона часто ассоциируется с «серыми» схемами и скрытыми платежами. Наш подход принципиально иной: мы работаем полностью «в белую», предоставляем прозрачные отчеты на каждом этапе и гарантируем юридическую чистоту сделки.</p>
            </div>
            <div className={styles.colImage}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Офис компании" 
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Наши принципы</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <h3>Прозрачность</h3>
              <p>Вы всегда знаете, за что платите. Все расходы фиксируются в договоре, никаких скрытых комиссий.</p>
            </div>
            <div className={styles.principleCard}>
              <h3>Юридическая безопасность</h3>
              <p>Официальный договор с ООО «СПОРТТЕХ», полная проверка истории автомобиля по базам Европы.</p>
            </div>
            <div className={styles.principleCard}>
              <h3>Качество</h3>
              <p>Мы не берем в работу автомобили после серьезных ДТП, со скрученным пробегом или сомнительной историей.</p>
            </div>
            <div className={styles.principleCard}>
              <h3>Сервис</h3>
              <p>Персональный менеджер 24/7. Мы всегда на связи и готовы ответить на любые ваши вопросы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Docs */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Юридическая информация</h2>
          <p className="section-subtitle" style={{ marginBottom: '30px' }}>Мы работаем строго в рамках законодательства РФ</p>
          
          <div className={styles.legalInfo}>
            <div className={styles.legalDetails}>
              <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью «СПОРТТЕХ»</p>
              <p><strong>ИНН:</strong> 1234567890</p>
              <p><strong>ОГРН:</strong> 1234567890123</p>
              <p><strong>КПП:</strong> 123456789</p>
              <p><strong>Юридический адрес:</strong> г. Москва, ул. Примерная, д. 1</p>
            </div>
            <div className={styles.legalActions}>
              <a href="https://www.rusprofile.ru/id/11692442" target="_blank" rel="noreferrer" className="btn btn-outline">
                Проверить нас на Rusprofile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
