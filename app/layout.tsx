import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "День Застройщика — приглашение гостям",
  description:
    "7 августа 2026 года, Охта Парк. Выставка, деловая конференция и торжественный банкет для представителей строительной отрасли.",
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "День Застройщика — 7 августа 2026",
    description: "Охта Парк. Подтвердите участие до 30 июля включительно.",
    images: [`${basePath}/banquet-artists.jpg`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
