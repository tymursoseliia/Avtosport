import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { cars } from "@/data/cars";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const car = cars.find(c => c.id === resolvedParams.id);
  
  if (!car) {
    return {
      title: "Автомобиль не найден | Sport-Tech"
    };
  }

  return {
    title: `${car.brand} ${car.model} ${car.year} из Европы | Sport-Tech`,
    description: `Купить ${car.brand} ${car.model} ${car.year} года с пробегом ${car.mileage} км из Европы. Цена под ключ: ${car.priceRub} руб.`,
  };
}

// Ensure the generateStaticParams is correct since we are exporting a static site
export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailsPage({ params }: Props) {
  const resolvedParams = await params;
  const car = cars.find(c => c.id === resolvedParams.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container">
        <div className={styles.breadcrumb}>
          <Link href="/catalog">Каталог</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{car.brand} {car.model}</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image 
                src={car.imageUrl} 
                alt={`${car.brand} ${car.model}`} 
                fill
                priority
                className={styles.image}
              />
            </div>
            {/* Gallery thumbnails would go here */}
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{car.brand} {car.model} <span className={styles.year}>{car.year}</span></h1>
            
            <div className={styles.priceBlock}>
              <div className={styles.priceRub}>{car.priceRub.toLocaleString('ru-RU')} ₽</div>
              <div className={styles.priceEuro}>~ {car.priceEuro.toLocaleString('ru-RU')} €</div>
              <div className={styles.priceNote}>Цена указана "под ключ" со всеми расходами и доставкой до Москвы</div>
            </div>

            <div className={styles.specsList}>
              <h3 className={styles.specsTitle}>Характеристики</h3>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Марка</span>
                <span className={styles.specVal}>{car.brand}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Модель</span>
                <span className={styles.specVal}>{car.model}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Год выпуска</span>
                <span className={styles.specVal}>{car.year}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Пробег</span>
                <span className={styles.specVal}>{car.mileage.toLocaleString('ru-RU')} км</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Двигатель</span>
                <span className={styles.specVal}>{car.engine}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Топливо</span>
                <span className={styles.specVal}>{car.fuel}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Коробка</span>
                <span className={styles.specVal}>{car.transmission}</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a href="#request" className="btn btn-primary" style={{ width: '100%', marginBottom: '15px' }}>
                Оставить заявку на этот авто
              </a>
              <a href="https://wa.me/78000000000" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                Задать вопрос в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
