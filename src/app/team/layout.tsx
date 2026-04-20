import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наша команда - АВТОСПОРТ",
  description: "Команда профессионалов АВТОСПОРТ. 13 специалистов по подбору и доставке автомобилей из Европы. Опыт работы более 11 лет.",
  openGraph: {
    title: "Наша команда - АВТОСПОРТ",
    description: "Команда профессионалов АВТОСПОРТ. 13 специалистов по подбору и доставке автомобилей из Европы. Опыт работы более 11 лет.",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
