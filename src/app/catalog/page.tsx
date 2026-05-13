import { Metadata } from "next";
import styles from "./page.module.css";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Каталог авто из Европы | Sport-Tech",
  description: "Автомобили из Европы в наличии и под заказ. Выберите авто вашей мечты с гарантией юридической чистоты и доставкой под ключ.",
};

export default function CatalogPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Каталог автомобилей</h1>
        <p className="section-subtitle">Выберите автомобиль из нашего каталога или закажите индивидуальный подбор</p>
        
        <div className={styles.catalogLayout}>
          {/* Filters Sidebar */}
          <aside className={styles.filters}>
            <div className={styles.filterBlock}>
              <h3 className={styles.filterTitle}>Фильтры</h3>
              
              <div className="form-group">
                <label className="form-label">Марка</label>
                <select className="form-input">
                  <option value="">Все марки</option>
                  <option value="bmw">BMW</option>
                  <option value="audi">Audi</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="volkswagen">Volkswagen</option>
                  <option value="porsche">Porsche</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Год выпуска</label>
                <div className={styles.rangeInputs}>
                  <input type="number" className="form-input" placeholder="От 2018" />
                  <input type="number" className="form-input" placeholder="До 2024" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Бюджет (₽)</label>
                <div className={styles.rangeInputs}>
                  <input type="number" className="form-input" placeholder="От" />
                  <input type="number" className="form-input" placeholder="До" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Тип топлива</label>
                <select className="form-input">
                  <option value="">Любой</option>
                  <option value="diesel">Дизель</option>
                  <option value="petrol">Бензин</option>
                  <option value="hybrid">Гибрид</option>
                  <option value="electro">Электро</option>
                </select>
              </div>
              
              <button className={`btn btn-primary ${styles.filterBtn}`}>Применить</button>
            </div>
          </aside>
          
          {/* Cars Grid */}
          <main className={styles.grid}>
            {cars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
