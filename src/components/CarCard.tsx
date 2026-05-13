import Image from "next/image";
import Link from "next/link";
import styles from "./CarCard.module.css";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={car.imageUrl} 
          alt={`${car.brand} ${car.model}`} 
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.badge}>{car.year} г.</div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{car.brand} {car.model}</h3>
        
        <div className={styles.specs}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Двигатель:</span>
            <span className={styles.specValue}>{car.engine} / {car.fuel}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>КПП:</span>
            <span className={styles.specValue}>{car.transmission}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Пробег:</span>
            <span className={styles.specValue}>{car.mileage.toLocaleString('ru-RU')} км</span>
          </div>
        </div>
        
        <div className={styles.priceContainer}>
          <div className={styles.priceRub}>{car.priceRub.toLocaleString('ru-RU')} ₽</div>
          <div className={styles.priceEuro}>~ {car.priceEuro.toLocaleString('ru-RU')} €</div>
          <div className={styles.priceNote}>Цена "под ключ" в РФ</div>
        </div>
        
        <Link href={`/catalog/${car.id}`} className={`btn btn-primary ${styles.btn}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
