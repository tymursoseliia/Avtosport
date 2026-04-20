'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, ChevronRight, Shield, Globe, Clock, CheckCircle2, MessageSquare, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { supabase, type Car } from '@/lib/supabase';
import { ContactDialog } from '@/components/ContactDialog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('status', 'available')
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) throw error;
      setCars(data || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[100svh] flex flex-col justify-center items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2615&auto=format&fit=crop"
            alt="Premium Car"
            className="w-full h-full object-cover transform scale-105 animate-[zoomIn_20s_ease-out_forwards] opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 flex flex-col items-center text-center mt-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
              Премиальный импорт
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1.05] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            АВТО ИЗ ЕВРОПЫ<br/>
            <span className="text-primary">БЕЗ КОМПРОМИССОВ</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 font-light leading-relaxed">
            Мы доставляем автомобили под ключ быстрее и дешевле рынка. От подбора на аукционах до постановки на учёт в РФ — полная прозрачность и сервис высшего класса.
          </p>

          <Button 
            onClick={() => setContactDialogOpen(true)}
            className="h-14 px-8 md:px-10 text-base md:text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500"
          >
            Начать подбор
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/40">
           <span className="text-[10px] uppercase tracking-[0.3em] mb-3 font-medium">Вниз</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Guarantees Section - Asymmetric Minimalist */}
      <section className="w-full py-32 md:py-48 px-6 bg-background relative border-b border-foreground/5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Sticky Left */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">01 / Гарантии</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tighter">
              БЕЗОПАСНОСТЬ<br/>СДЕЛКИ
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed">
              Покупка автомобиля за границей сопряжена с рисками. Мы берем все риски из вашей головы и переносим их в юридический договор. Никаких скрытых условий.
            </p>
            <Button onClick={() => setContactDialogOpen(true)} variant="outline" className="rounded-full h-14 px-8 border-foreground/20 hover:bg-foreground hover:text-background transition-all uppercase tracking-wider text-xs font-bold">
              Смотреть договор
            </Button>
          </div>
          
          {/* Scrolling Right */}
          <div className="lg:w-2/3 flex flex-col gap-0">
            {[
              { id: '01', title: 'Скрытые дефекты', desc: 'Забудьте о страхе купить авто с замаскированным кузовным ремонтом или скрученным пробегом. Мы проводим глубокую экспертизу перед покупкой.' },
              { id: '02', title: 'Рост цены', desc: 'Никаких сюрпризов при растаможке. Цена фиксируется в договоре, и вы заранее знаете итоговую стоимость автомобиля "под ключ".' },
              { id: '03', title: 'Логистика и банки', desc: 'Автомобиль не застрянет на границе, а деньги не заморозят. Мы выстроили надежную логистику и безопасные финансовые маршруты.' }
            ].map((risk, index) => (
              <div key={risk.id} className={`py-12 group ${index !== 0 ? 'border-t border-foreground/10' : ''}`}>
                 <div className="text-primary text-sm font-medium tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">/{risk.id}</div>
                 <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tight">{risk.title}</h3>
                 <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl">{risk.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process Section - Clean Blocks */}
      <section className="w-full py-32 md:py-48 px-6 bg-card relative">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20 md:mb-32">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">02 / Процесс</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tighter max-w-4xl">
              ВЫ ВЫБИРАЕТЕ АВТО —<br/>ОСТАЛЬНОЕ БЕРЁМ НА СЕБЯ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: 'Поиск и подбор', img: '/russian_businessman.png', desc: 'Фиксируем ваши требования в договоре: марка, бюджет, комплектация. Ищем идеальное соответствие по всей Европе.' },
              { title: 'Диагностика и выкуп', img: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Проводим полную проверку истории и технического состояния. Выкупаем автомобиль напрямую с аукциона.' },
              { title: 'Доставка и учёт', img: '/delivery_features.jpg', desc: 'Берем на себя логистику, растаможку и получение всех документов для беспроблемной постановки на учёт в РФ.' }
            ].map((step, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-80 md:h-[450px] overflow-hidden mb-8 rounded-sm">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="border-l-2 border-primary pl-6 py-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section - Sleek Grid */}
      <section className="w-full py-32 md:py-48 px-6 bg-background relative border-t border-foreground/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">03 / Каталог</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter">
                В НАЛИЧИИ
              </h2>
            </div>
            <Link href="/catalog" className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium text-sm tracking-widest uppercase">
              Смотреть все <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {loading ? (
            <div className="py-32 flex justify-center">
              <div className="w-12 h-12 border-2 border-foreground/10 border-t-primary rounded-full animate-spin" />
            </div>
          ) : cars.length === 0 ? (
            <div className="py-32 text-center">
              <p className="text-muted-foreground text-xl font-light">Каталог обновляется. В данный момент нет автомобилей в наличии.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
               {cars.map(car => (
                 <Link href="/catalog" key={car.id} className="group flex flex-col">
                    <div className="relative h-[300px] lg:h-[400px] mb-6 overflow-hidden bg-muted rounded-sm">
                       {car.images?.[0] ? (
                         <img src={car.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`${car.brand} ${car.model}`} />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center bg-card text-muted-foreground">Нет фото</div>
                       )}
                       
                       {car.status === 'sold' && (
                         <div className="absolute top-4 right-4 bg-red-600/90 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md">Продано</div>
                       )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{car.brand} {car.model}</h3>
                        <span className="text-xl font-light text-foreground whitespace-nowrap">{car.price.toLocaleString()} ₽</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-light tracking-wide opacity-80">
                        {car.year} • {car.mileage.toLocaleString()} км • {car.fuel_type}
                      </div>
                    </div>
                 </Link>
               ))}
            </div>
          )}
        </div>
      </section>

      {/* Dynamic Sections (Redesigned) */}
      <ClientReviewsSection />
      <ConsultationFormSection />
      <FAQSection />

      <Footer />
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </div>
  );
}

function ConsultationFormSection() {
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', budget: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Пожалуйста, согласитесь с условиями пользовательского соглашения');
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'consultation' }),
      });
      if (!response.ok) throw new Error('Ошибка отправки');
      alert(`Спасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
      setFormData({ name: '', phone: '', budget: '' });
      setAgreed(false);
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-32 md:py-48 px-6 bg-card border-y border-foreground/5 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Text */}
        <div>
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">04 / Консультация</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tighter">
            ОСТАЛИСЬ<br/>ВОПРОСЫ?
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
            Оставьте заявку, и наш эксперт свяжется с вами для подробной консультации, расчета стоимости и подбора идеального автомобиля.
          </p>
          <div className="flex gap-6">
            <a href="https://t.me/Sdservice24" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-foreground hover:text-[#0088cc] transition-colors">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-[#0088cc]/10 transition-colors">
                <Send className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium tracking-wide">Telegram</span>
            </a>
            <a href="https://max.ru/u/f9LHodD0cOLd_wpVLKdoX-6cYVQPnzVsKXfd4Yyv1T741m3KQNI63EzYpvY" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-foreground hover:text-green-500 transition-colors">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wide">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-background p-10 md:p-14 rounded-sm border border-foreground/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Ваше имя</label>
              <Input
                type="text"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg placeholder:text-muted-foreground/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Телефон</label>
              <div className="flex items-center">
                <span className="text-lg text-foreground mr-2">+7</span>
                <Input
                  type="tel"
                  placeholder="(999) 000-00-00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-14 bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg placeholder:text-muted-foreground/50 transition-colors w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Бюджет</label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })} required>
                <SelectTrigger className="h-14 bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 focus:ring-0 focus:border-primary text-lg transition-colors">
                  <SelectValue placeholder="Выберите бюджет" />
                </SelectTrigger>
                <SelectContent className="bg-background border-foreground/10 text-foreground rounded-sm">
                  <SelectItem value="500k">До 500 000 ₽</SelectItem>
                  <SelectItem value="1m">500 000 - 1 000 000 ₽</SelectItem>
                  <SelectItem value="2m">1 000 000 - 2 000 000 ₽</SelectItem>
                  <SelectItem value="3m">2 000 000 - 3 000 000 ₽</SelectItem>
                  <SelectItem value="more">Более 3 000 000 ₽</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                disabled={!agreed || submitting}
                className="w-full h-14 bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-sm tracking-widest uppercase font-bold rounded-full transition-all duration-300 disabled:opacity-50"
              >
                {submitting ? 'Отправка...' : 'Оставить заявку'}
              </Button>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <Checkbox
                id="consultation-terms"
                checked={agreed}
                onCheckedChange={(checked: boolean) => setAgreed(checked)}
                className="mt-1 border-foreground/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary rounded-sm"
              />
              <label htmlFor="consultation-terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-light">
                Я даю согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности.
              </label>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Из чего формируется стоимость автомобиля?",
      answer: "Стоимость автомобиля складывается из нескольких составляющих: цена автомобиля на аукционе или у дилера, стоимость доставки из Европы в РФ, таможенные платежи (пошлина, НДС, утилизационный сбор), оформление документов и наши услуги по подбору и сопровождению сделки."
    },
    {
      question: "Какие марки автомобилей вы привозите из Европы?",
      answer: "Мы работаем со всеми европейскими марками: Mercedes-Benz, BMW, Audi, Volkswagen, Porsche, Volvo, Land Rover, Jaguar и многими другими. Подбираем автомобили любых классов - от компактных городских до премиум и спортивных моделей."
    },
    {
      question: "Какие гарантии доставки и как страхуется автомобиль на время транспортировки?",
      answer: "Автомобиль страхуется на весь период транспортировки от момента покупки до передачи вам. Мы работаем только с проверенными транспортными компаниями. В договоре прописываются все сроки и условия доставки с гарантией возмещения в случае любых повреждений."
    },
    {
      question: "Как долго доставляется автомобиль из Европе?",
      answer: "Средний срок доставки составляет от 7 до 14 дней с момента покупки автомобиля. Это включает время на оформление документов, логистику и растаможку. Точные сроки зависят от страны отправления и текущей загруженности таможни."
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы предоставляем полную юридическую гарантию чистоты автомобиля, гарантию соответствия заявленным характеристикам, страховку на время доставки. Все условия прописываются в договоре. Также проводим полную диагностику перед отправкой."
    }
  ];

  return (
    <section className="py-32 md:py-48 px-6 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">05 / FAQ</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter">
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
        </div>

        <div className="border-t border-foreground/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-foreground/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground pr-8 group-hover:text-primary transition-colors tracking-tight">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-foreground border-foreground text-background rotate-45' : 'border-foreground/20 text-foreground group-hover:border-foreground'}`}>
                  <span className="text-xl leading-none font-light mb-0.5">+</span>
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <div className="text-lg text-muted-foreground font-light leading-relaxed pr-12">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    { name: "Павел Д.", text: "Все прошло на высшем уровне. Доставили быстро, авто в идеальном состоянии, документы оформлены без задержек. Приятно, когда люди следуют выполненным сроках!", carImage: "https://i.ibb.co/yB7vDp2c/photo-2026-01-14-12-40-23.jpg", rating: 5.0 },
    { name: "Екатерина Л.", text: "Получила свою новую машину, как и планировала! Довольна качеством и состоянием авто, а также отличным сервисом и четкостью на всех этапах.", carImage: "https://i.ibb.co/qMSXBdFL/photo-2026-01-14-12-40-43.jpg", rating: 4.9 },
    { name: "Максим Р.", text: "Решил купить авто из Европы и не ошибся. Все расходы и этапы были прозрачны, заранее, и автомобиль доставили вовремя. Очень рад, что выбрал вас!", carImage: "https://i.ibb.co/4GYrgJb/photo-2026-01-14-12-40-55.jpg", rating: 5.0 },
    { name: "Виктор С.", text: "Очень рекомендую этот способ покупки! Автомобиль пригнали в отличном виде, документы в порядке. Профессиональная команда, с которой приятно работать.", carImage: "https://i.ibb.co/j9jbH9vJ/photo-2026-01-19-12-55-04.jpg", rating: 5.0 },
    { name: "Лариса Д.", text: "Автомобиль приехал в отличном состоянии. Как и обещали, проверка была быстрой. Весь процесс прошел гладко и без каких-либо сюрпризов.", carImage: "https://i.ibb.co/SDSkFmCB/photo-2026-01-19-13-00-11.jpg", rating: 5.0 },
    { name: "Федор П.", text: "Спасибо за честность и профессионализм! Машина соответствует всем заявленным характеристикам. Процесс был прозрачным от начала до конца.", carImage: "https://i.ibb.co/dJfRt4YZ/photo-2026-01-26-17-10-30.jpg", rating: 5.0 },
    { name: "Дмитрий В.", text: "Очень доволен качеством подбора и скоростью доставки. Цена действительно выгоднее, чем у дилеров. Получил именно то, что хотел!", carImage: "https://i.ibb.co/GLyBZ69/photo-2026-01-26-17-33-52.jpg", rating: 5.0 },
    { name: "Сергей М.", text: "Отличный сервис! Помогли с выбором, организовали доставку, оформили все документы. Рекомендую всем, кто хочет купить авто из Европы.", carImage: "https://i.ibb.co/sJssx8HP/photo-2026-01-27-15-36-53.jpg", rating: 4.9 },
    { name: "Алексей Т.", text: "Машина пришла в идеальном состоянии! Все как в описании. Спасибо за профессиональную работу и внимание к деталям.", carImage: "https://i.ibb.co/HLsdvDM2/photo-2026-01-30-13-27-51.jpg", rating: 5.0 },
    { name: "Игорь П.", text: "Весь процесс занял меньше месяца. Отличная поддержка на всех этапах. Автомобиль полностью соответствует ожиданиям!", carImage: "https://i.ibb.co/TxzYwpTG/photo-2026-01-30-13-27-52.jpg", rating: 5.0 },
    { name: "Анна В.", text: "Качество подбора на высоте, все документы в порядке. Очень довольна сотрудничеством! Автомобиль мечты получен.", carImage: "https://i.ibb.co/JWkRjMk2/photo-2026-02-05-13-08-15-2.jpg", rating: 5.0 },
    { name: "Андрей Л.", text: "Профессиональный подход, честные цены, быстрая доставка. Всё на высшем уровне! Буду рекомендовать друзьям.", carImage: "https://i.ibb.co/Q3qS7MMH/photo-2026-02-05-13-08-15.jpg", rating: 4.9 },
    { name: "Ельвира К.", text: "Получила автомобиль точно в срок. Вся информация была предоставлена заранее. Никаких скрытых платежей. Отличная работа!", carImage: "https://i.ibb.co/h1wMxhr0/photo-2026-02-12-13-08-08.jpg", rating: 5.0 },
    { name: "Владимир Б.", text: "Очень доволен покупкой! Автомобиль в отличном состоянии, все документы оформлены правильно. Спасибо за качественную работу!", carImage: "https://i.ibb.co/213tpzZq/photo-2026-02-12-13-08-12.jpg", rating: 5.0 },
    { name: "Константин Д.", text: "Приятно удивлен качеством сервиса. Весь процесс был прозрачным и понятным. Автомобиль соответствует всем ожиданиям!", carImage: "https://i.ibb.co/4BKx44M/photo-2026-02-03-13-15-49.jpg", rating: 5.0 },
    { name: "Николай П.", text: "Превосходный опыт покупки! Команда профессионалов сделала всё быстро и качественно. Автомобиль мечты теперь у меня!", carImage: "https://i.ibb.co/DDf4dP2V/photo-2026-02-12-13-10-04.jpg", rating: 5.0 }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 md:py-48 px-6 bg-card border-t border-foreground/5 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">06 / Отзывы</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tighter">
              НАМ ДОВЕРЯЮТ
            </h2>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-14 h-14 border border-foreground/20 hover:border-foreground text-foreground rounded-full flex items-center justify-center transition-all group">
              <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scroll('right')} className="w-14 h-14 border border-foreground/20 hover:border-foreground text-foreground rounded-full flex items-center justify-center transition-all group">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto scrollbar-hide pb-12 -mx-6 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-[350px] md:w-[450px] snap-start group">
              <div className="relative h-[250px] mb-8 overflow-hidden rounded-sm bg-muted">
                <img src={review.carImage} alt={review.name} className="w-full h-full object-cover transition-all duration-700" />
              </div>
              <div className="border-t border-foreground/10 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-xl text-foreground">{review.name}</h4>
                  <span className="text-lg font-light flex items-center gap-1">★ {review.rating.toFixed(1)}</span>
                </div>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
