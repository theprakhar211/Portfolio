import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import CommandPalette from "@/components/CommandPalette";

const BASE_URL = "https://prakhar-sharma.vercel.app";
const DESCRIPTION =
  "Portfolio of Prakhar Sharma, a final-year CSE-AI student from Bhopal focused on applied AI and full-stack engineering: LLM apps, RAG, FastAPI, and React/Next.js.";

export const metadata = {
  title: "Prakhar Sharma — AI & Full-Stack Developer | CSE-AI Student",
  description:
    DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Prakhar Sharma — AI & Full-Stack Developer | CSE-AI Student",
    description:
      DESCRIPTION,
    url: BASE_URL,
    siteName: "Prakhar Sharma",
    images: [
      {
        url: `${BASE_URL}/screenshot.png`,
        width: 1200,
        height: 630,
        alt: "Prakhar Sharma — AI & Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar Sharma — AI & Full-Stack Developer | CSE-AI Student",
    description:
      DESCRIPTION,
    images: [`${BASE_URL}/screenshot.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CommandPalette />
        <BackgroundWrapper>
          <main>{children}</main>
        </BackgroundWrapper>
      </body>
    </html>
  );
}