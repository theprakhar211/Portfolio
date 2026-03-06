import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/BackgroundWrapper";

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
