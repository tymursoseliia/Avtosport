export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  engine: string;
  fuel: string;
  transmission: string;
  mileage: number;
  priceEuro: number;
  priceRub: number;
  imageUrl: string;
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "BMW",
    model: "X5 xDrive30d",
    year: 2020,
    engine: "3.0 л",
    fuel: "Дизель",
    transmission: "АКПП",
    mileage: 45000,
    priceEuro: 55000,
    priceRub: 6500000,
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    brand: "Audi",
    model: "Q7 45 TDI",
    year: 2021,
    engine: "3.0 л",
    fuel: "Дизель",
    transmission: "АКПП",
    mileage: 32000,
    priceEuro: 62000,
    priceRub: 7200000,
    imageUrl: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    brand: "Mercedes-Benz",
    model: "E-Class 220d",
    year: 2019,
    engine: "2.0 л",
    fuel: "Дизель",
    transmission: "АКПП",
    mileage: 68000,
    priceEuro: 38000,
    priceRub: 4500000,
    imageUrl: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    brand: "Volkswagen",
    model: "Touareg",
    year: 2022,
    engine: "3.0 л",
    fuel: "Дизель",
    transmission: "АКПП",
    mileage: 15000,
    priceEuro: 68000,
    priceRub: 7800000,
    imageUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    brand: "Volvo",
    model: "XC90",
    year: 2020,
    engine: "2.0 л",
    fuel: "Дизель",
    transmission: "АКПП",
    mileage: 55000,
    priceEuro: 48000,
    priceRub: 5600000,
    imageUrl: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    brand: "Porsche",
    model: "Cayenne",
    year: 2021,
    engine: "3.0 л",
    fuel: "Бензин",
    transmission: "АКПП",
    mileage: 28000,
    priceEuro: 85000,
    priceRub: 9800000,
    imageUrl: "https://images.unsplash.com/photo-1503376760305-6450fdf50bc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];
