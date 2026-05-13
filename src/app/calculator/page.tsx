"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function CalculatorPage() {
  const [age, setAge] = useState("3-5");
  const [engineVolume, setEngineVolume] = useState("");
  const [horsepower, setHorsepower] = useState("");
  const [carPrice, setCarPrice] = useState("");
  
  const [result, setResult] = useState<null | {
    duty: number;
    utilFee: number;
    total: number;
  }>(null);

  const calculateCustoms = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Very simplified approximate calculation logic for demonstration purposes
    const volumeCm3 = Number(engineVolume);
    const hp = Number(horsepower);
    const priceEur = Number(carPrice);
    
    if (!volumeCm3 || !hp || !priceEur) return;

    let dutyRate = 0;
    
    if (age === "under-3") {
      dutyRate = 0.48; // 48% of cost for cars under 3 years
    } else if (age === "3-5") {
      // Rates per cm3
      if (volumeCm3 <= 1000) dutyRate = 1.5;
      else if (volumeCm3 <= 1500) dutyRate = 1.7;
      else if (volumeCm3 <= 1800) dutyRate = 2.5;
      else if (volumeCm3 <= 2300) dutyRate = 2.7;
      else if (volumeCm3 <= 3000) dutyRate = 3.0;
      else dutyRate = 3.6;
    } else {
      // Over 5 years
      if (volumeCm3 <= 1000) dutyRate = 3.0;
      else if (volumeCm3 <= 1500) dutyRate = 3.2;
      else if (volumeCm3 <= 1800) dutyRate = 3.5;
      else if (volumeCm3 <= 2300) dutyRate = 4.8;
      else if (volumeCm3 <= 3000) dutyRate = 5.0;
      else dutyRate = 5.7;
    }

    let duty = 0;
    if (age === "under-3") {
      duty = priceEur * dutyRate;
    } else {
      duty = volumeCm3 * dutyRate;
    }

    const eurToRub = 100; // Approximate exchange rate
    const dutyRub = duty * eurToRub;
    const utilFee = 3400; // Physical person, under 3.0L
    
    setResult({
      duty: dutyRub,
      utilFee: utilFee,
      total: dutyRub + utilFee
    });
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Калькулятор растаможки</h1>
        <p className="section-subtitle">Рассчитайте ориентировочную стоимость таможенной очистки автомобиля при ввозе в РФ</p>
        
        <div className={styles.calcLayout}>
          <div className={styles.calcForm}>
            <form onSubmit={calculateCustoms}>
              <div className="form-group">
                <label className="form-label">Возраст автомобиля</label>
                <select className="form-input" value={age} onChange={(e) => setAge(e.target.value)}>
                  <option value="under-3">До 3 лет</option>
                  <option value="3-5">От 3 до 5 лет</option>
                  <option value="over-5">Старше 5 лет</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Стоимость автомобиля (Евро)</label>
                <input 
                  type="number" 
                  className="form-input" 
                  value={carPrice} 
                  onChange={(e) => setCarPrice(e.target.value)} 
                  placeholder="Например, 15000"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Объем двигателя (см³)</label>
                <input 
                  type="number" 
                  className="form-input" 
                  value={engineVolume} 
                  onChange={(e) => setEngineVolume(e.target.value)} 
                  placeholder="Например, 1998"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Мощность (л.с.)</label>
                <input 
                  type="number" 
                  className="form-input" 
                  value={horsepower} 
                  onChange={(e) => setHorsepower(e.target.value)} 
                  placeholder="Например, 190"
                  required
                />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Рассчитать стоимость
              </button>
            </form>
          </div>

          <div className={styles.calcResult}>
            {result ? (
              <div className={`${styles.resultBox} animate-fade-in`}>
                <h3 className={styles.resultTitle}>Результаты расчета</h3>
                
                <div className={styles.resultRow}>
                  <span>Таможенная пошлина:</span>
                  <strong>{result.duty.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</strong>
                </div>
                
                <div className={styles.resultRow}>
                  <span>Утилизационный сбор:</span>
                  <strong>{result.utilFee.toLocaleString('ru-RU')} ₽</strong>
                </div>
                
                <div className={styles.resultTotal}>
                  <span>Итого к оплате на таможне:</span>
                  <div className={styles.totalSum}>{result.total.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</div>
                </div>
                
                <p className={styles.note}>
                  * Расчет является ориентировочным и зависит от точного курса валют на день подачи декларации.
                </p>
                
                <div className={styles.actions}>
                  <a href="#request" className="btn btn-primary" style={{ width: '100%', marginBottom: '15px' }}>
                    Оставить заявку на точный расчет
                  </a>
                  <a href="/contacts" className="btn btn-outline" style={{ width: '100%' }}>
                    Связаться с менеджером
                  </a>
                </div>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🧮</div>
                <h3>Заполните форму слева</h3>
                <p>Здесь появится подробный расчет таможенных платежей, включая пошлину и утильсбор.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
