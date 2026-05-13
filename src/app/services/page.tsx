import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Услуги и тарифы | Sport-Tech",
  description: "Прозрачные тарифы на пригон авто из Европы. Полный цикл услуг от поиска до выдачи с ЭПТС.",
};

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Услуги и тарифы</h1>
        <p className="section-subtitle">Прозрачное ценообразование без скрытых комиссий и навязанных услуг</p>

        <div className={styles.servicesGrid}>
          {/* Service 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <h3 className={styles.serviceTitle}>Полный пригон "Под ключ"</h3>
              <div className={styles.servicePrice}>от 150 000 ₽</div>
            </div>
            <ul className={styles.serviceList}>
              <li>Поиск и подбор вариантов</li>
              <li>Проверка истории и документов</li>
              <li>Выездной осмотр экспертом в Европе</li>
              <li>Помощь в переводе средств</li>
              <li>Логистика до Москвы</li>
              <li>Таможенное оформление и утильсбор</li>
              <li>Получение ЭПТС и СБКТС</li>
            </ul>
            <Link href="/contacts" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
              Заказать
            </Link>
          </div>

          {/* Service 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <h3 className={styles.serviceTitle}>Только логистика и таможня</h3>
              <div className={styles.servicePrice}>от 80 000 ₽</div>
            </div>
            <ul className={styles.serviceList}>
              <li>Заберем уже купленный вами авто</li>
              <li>Оформление экспортных документов (EX-1)</li>
              <li>Бережная доставка автовозом</li>
              <li>Таможенная очистка</li>
              <li>Оформление СБКТС и ЭПТС</li>
            </ul>
            <Link href="/contacts" className="btn btn-outline" style={{ width: '100%', marginTop: 'auto' }}>
              Заказать
            </Link>
          </div>

          {/* Service 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <h3 className={styles.serviceTitle}>Осмотр авто в Европе</h3>
              <div className={styles.servicePrice}>от 350 €</div>
            </div>
            <ul className={styles.serviceList}>
              <li>Выезд эксперта к продавцу</li>
              <li>Проверка ЛКП толщиномером</li>
              <li>Компьютерная диагностика</li>
              <li>Тест-драйв</li>
              <li>Подробный фото и видео отчет (более 100 файлов)</li>
            </ul>
            <Link href="/contacts" className="btn btn-outline" style={{ width: '100%', marginTop: 'auto' }}>
              Заказать
            </Link>
          </div>
        </div>

        <div className={styles.tableSection}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '30px' }}>Из чего складывается итоговая стоимость?</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Статья расходов</th>
                  <th>Описание</th>
                  <th>Примерная стоимость</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Стоимость авто</strong></td>
                  <td>Цена нетто (без НДС) на территории Европы</td>
                  <td>По инвойсу продавца</td>
                </tr>
                <tr>
                  <td><strong>Комиссия компании</strong></td>
                  <td>Оплата наших услуг по подбору и сопровождению</td>
                  <td>от 150 000 ₽</td>
                </tr>
                <tr>
                  <td><strong>Логистика</strong></td>
                  <td>Доставка на автовозе из Европы в РФ (Москва)</td>
                  <td>2 000 - 3 500 €</td>
                </tr>
                <tr>
                  <td><strong>Таможенная пошлина</strong></td>
                  <td>Зависит от возраста авто (до 3 лет, 3-5 лет, старше 5 лет) и объема двигателя</td>
                  <td><Link href="/calculator" style={{ color: 'var(--accent-orange)' }}>Рассчитать в калькуляторе</Link></td>
                </tr>
                <tr>
                  <td><strong>Утилизационный сбор</strong></td>
                  <td>Обязательный платеж государству</td>
                  <td>3 400 ₽ (льготный для физ. лиц до 3.0л)</td>
                </tr>
                <tr>
                  <td><strong>СБКТС и ЭПТС</strong></td>
                  <td>Документы для постановки на учет в ГИБДД</td>
                  <td>~ 45 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
