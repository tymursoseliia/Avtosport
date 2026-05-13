import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

export default function Home() {
  // Take 3 latest cars for showcase
  const showcaseCars = cars.slice(0, 3);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Автомобили из Европы <span className={styles.textAccent}>под ключ</span> в Россию
            </h1>
            <p className={styles.heroSubtitle}>
              С гарантией юридической чистоты, полной проверкой и прозрачным ценообразованием.
            </p>
            <div className={styles.heroActions}>
              <Link href="/calculator" className="btn btn-primary">Рассчитать стоимость</Link>
              <Link href="/catalog" className="btn btn-outline-light">Смотреть каталог</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Свежие поступления</h2>
          <p className="section-subtitle">Ознакомьтесь с автомобилями, которые мы недавно подобрали для наших клиентов.</p>
          
          <div className={styles.carsGrid}>
            {showcaseCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className={styles.centerAction}>
            <Link href="/catalog" className="btn btn-outline">Весь каталог авто</Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Как мы работаем</h2>
          <p className="section-subtitle">Прозрачный процесс от первого звонка до получения ключей</p>
          
          <div className={styles.stepsGrid}>
            {[
              { num: "01", title: "Заявка и поиск", desc: "Вы оставляете заявку, мы подбираем варианты на европейских аукционах и стоянках." },
              { num: "02", title: "Проверка", desc: "Наш эксперт выезжает на осмотр, проверяет кузов, технику и документы." },
              { num: "03", title: "Выкуп", desc: "Оформляем сделку с продавцом, подготавливаем экспортные документы." },
              { num: "04", title: "Логистика", desc: "Доставляем автомобиль на автовозе с полной страховкой груза." },
              { num: "05", title: "Таможня", desc: "Проходим все таможенные процедуры, оплачиваем пошлины и утильсбор." },
              { num: "06", title: "Выдача", desc: "Вы получаете полностью готовый автомобиль с ЭПТС и ключами." }
            ].map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className={`section section-dark ${styles.leadSection}`}>
        <div className={`container ${styles.leadContainer}`}>
          <div className={styles.leadContent}>
            <h2>Получите подборку из 5 авто под ваш бюджет</h2>
            <p>Оставьте заявку, и наш менеджер пришлет вам лучшие варианты в WhatsApp в течение 15 минут.</p>
          </div>
          <div className={styles.leadForm}>
            <form className={styles.form}>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Марка и модель авто" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Ваш бюджет (в рублях)" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-input" placeholder="Номер телефона (WhatsApp)" required />
              </div>
              <button type="button" className={`btn btn-primary ${styles.submitBtn}`}>Получить подборку</button>
              <p className={styles.formNote}>Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
