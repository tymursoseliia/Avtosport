import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Команда | Sport-Tech",
  description: "Познакомьтесь с командой экспертов Sport-Tech. Мы знаем всё о подборе, таможне и доставке автомобилей из Европы.",
};

const teamMembers = [
  {
    id: 1,
    name: "Максим Воронов",
    role: "Старший эксперт по подбору (Европа)",
    experience: "Опыт: 12 лет",
    description: "Находится в Германии. Лично осматривает автомобили, проводит диагностику и проверяет юридическую чистоту перед выкупом.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    contact: "Telegram / WhatsApp"
  },
  {
    id: 2,
    name: "Елена Смирнова",
    role: "Руководитель отдела логистики",
    experience: "Опыт: 8 лет",
    description: "Отвечает за бережную доставку автомобилей автовозами. Разрабатывает оптимальные маршруты и страхует каждый груз на полную стоимость.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    contact: null
  },
  {
    id: 3,
    name: "Александр Морозов",
    role: "Специалист по таможенному оформлению",
    experience: "Опыт: 15 лет",
    description: "Проводит автомобили через таможню за 1-2 дня. Знает все тонкости оформления ЭПТС, СБКТС и оплаты утильсбора.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    contact: null
  },
  {
    id: 4,
    name: "Анна Соколова",
    role: "Менеджер по работе с клиентами",
    experience: "Опыт: 5 лет",
    description: "Ваш личный помощник 24/7. Ответит на любые вопросы, подготовит договор и пришлет ежедневный отчет о статусе вашего авто.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    contact: null
  }
];

export default function TeamPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Наша команда</h1>
        <p className="section-subtitle">Люди, благодаря которым процесс покупки авто из Европы становится простым и прозрачным</p>
        
        <div className={styles.teamGrid}>
          {teamMembers.map(member => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <div className={styles.memberRole}>{member.role}</div>
                <div className={styles.memberExp}>{member.experience}</div>
                <p className={styles.memberDesc}>{member.description}</p>
                
                {member.contact && (
                  <a href="#" className={`btn btn-outline ${styles.contactBtn}`}>Связаться: {member.contact}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
