import type React from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Space_Grotesk, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ContactModalProvider } from "@/components/contact-modal";
import { locales } from "@/i18n/config";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEO. | Software Engineer & Architect",
  description:
    "Crafting Digital Ecosystems - Based in the intersection of robust code and Swiss design principles.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ContactModalProvider>{children}</ContactModalProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
