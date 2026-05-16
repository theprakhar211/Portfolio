import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/BackgroundWrapper";

const BASE_URL = "https://prakhar-sharma.vercel.app";

export const metadata = {
  title: "Prakhar Sharma — AI & Full-Stack Developer | CSE-AI Student",
  description:
    "Portfolio of Prakhar Sharma, a 3rd year CSE-AI student from Gwalior specialising in NLP, Generative AI, FastAPI, and React. Building intelligent systems and full-stack applications.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Prakhar Sharma — AI & Full-Stack Developer | CSE-AI Student",
    description:
      "Portfolio of Prakhar Sharma, a 3rd year CSE-AI student from Gwalior specialising in NLP, Generative AI, FastAPI, and React. Building intelligent systems and full-stack applications.",
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
      "Portfolio of Prakhar Sharma, a 3rd year CSE-AI student from Gwalior specialising in NLP, Generative AI, FastAPI, and React. Building intelligent systems and full-stack applications.",
    images: [`${BASE_URL}/screenshot.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BackgroundWrapper>
          <main>{children}</main>
        </BackgroundWrapper>
      </body>
    </html>
  );
}