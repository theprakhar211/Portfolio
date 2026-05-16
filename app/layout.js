import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/BackgroundWrapper";

export const metadata = {
  title: "Prakhar Sharma — AI & Full-Stack Developer",
  description:
    "3rd year CSE-AI student building intelligent systems, developer tools, and interactive applications. Specialising in NLP, Generative AI, and full-stack development.",
  metadataBase: new URL("https://prakhar-sharma.vercel.app"),
  openGraph: {
    title: "Prakhar Sharma — AI & Full-Stack Developer",
    description:
      "3rd year CSE-AI student building intelligent systems, developer tools, and interactive applications.",
    url: "https://prakhar-sharma.vercel.app",
    siteName: "Prakhar Sharma",
    images: [
      {
        url: "/screenshot.png",
        width: 1200,
        height: 630,
        alt: "Prakhar Sharma — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar Sharma — AI & Full-Stack Developer",
    description:
      "3rd year CSE-AI student building intelligent systems, developer tools, and interactive applications.",
    images: ["/screenshot.png"],
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