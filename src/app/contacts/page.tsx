import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакты | Sport-Tech",
  description: "Свяжитесь с нами для заказа автомобиля из Европы. Телефон, мессенджеры, адрес офиса в Москве и форма обратной связи.",
};

export default function ContactsPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Контакты</h1>
        <p className="section-subtitle">Мы всегда на связи и готовы ответить на ваши вопросы</p>

        <div className={styles.contactsLayout}>
          {/* Info Side */}
          <div className={styles.infoCol}>
            <div className={styles.contactBlock}>
              <h3>Телефон горячей линии</h3>
              <a href="tel:+78000000000" className={styles.phoneBig}>8 (800) 000-00-00</a>
              <p className={styles.note}>Звонок по России бесплатный</p>
            </div>

            <div className={styles.contactBlock}>
              <h3>Мессенджеры</h3>
              <div className={styles.messengers}>
                <a href="https://t.me/sporttech_bot" target="_blank" rel="noreferrer" className={`btn ${styles.tgBtn}`}>
                  Написать в Telegram
                </a>
                <a href="https://wa.me/78000000000" target="_blank" rel="noreferrer" className={`btn ${styles.waBtn}`}>
                  Написать в WhatsApp
                </a>
              </div>
            </div>

            <div className={styles.contactBlock}>
              <h3>VIP-запросы</h3>
              <p style={{ marginBottom: '10px' }}>Для сложных запросов и премиум-сегмента:</p>
              <a href="https://t.me/max_sporttech" target="_blank" rel="noreferrer" className={styles.vipLink}>
                Связаться с менеджером Максом
              </a>
            </div>

            <div className={styles.contactBlock}>
              <h3>Email</h3>
              <a href="mailto:info@sporttech.ru" className={styles.emailLink}>info@sporttech.ru</a>
            </div>

            <div className={styles.contactBlock}>
              <h3>Офис и время работы</h3>
              <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1, БЦ "Премиум", офис 100</p>
              <p><strong>График:</strong> Пн-Пт: 10:00 - 20:00, Сб-Вс: по предварительной записи</p>
            </div>
          </div>

          {/* Map & Form Side */}
          <div className={styles.actionCol}>
            <div className={styles.formCard}>
              <h3>Остались вопросы? Напишите нам</h3>
              <p className={styles.formDesc}>Оставьте заявку, и мы перезвоним вам в течение 15 минут.</p>
              
              <form className={styles.form}>
                <div className="form-group">
                  <label className="form-label">Ваше имя</label>
                  <input type="text" className="form-input" placeholder="Иван Иванов" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Телефон</label>
                  <input type="tel" className="form-input" placeholder="+7 (999) 000-00-00" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Сообщение или вопрос</label>
                  <textarea className="form-input" rows={4} placeholder="Напишите, какой автомобиль вас интересует..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Отправить заявку</button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <h2 className={styles.mapTitle}>Как до нас добраться</h2>
          <div className={styles.mapWrapper}>
            {/* Yandex Map Iframe */}
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a192b4505342a77a94dd7d98305c48b776de117de272ed6efdf31e13f41ee1f&amp;source=constructor" 
              width="100%" 
              height="450" 
              frameBorder="0"
              title="Карта проезда в офис Sport-Tech"
            ></iframe>
          </div>
        </div>
        
        {/* Full Requisites */}
        <div className={styles.requisitesSection}>
          <h2 className={styles.reqTitle}>Реквизиты компании</h2>
          <div className={styles.reqGrid}>
            <div>
              <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью «СПОРТТЕХ»</p>
              <p><strong>ИНН:</strong> 1234567890</p>
              <p><strong>ОГРН:</strong> 1234567890123</p>
            </div>
            <div>
              <p><strong>КПП:</strong> 123456789</p>
              <p><strong>Расчетный счет:</strong> 40702810000000000000</p>
              <p><strong>Банк:</strong> ПАО СБЕРБАНК</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
