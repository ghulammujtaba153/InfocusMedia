import "./globals.css";
import Navbar from "../components/Navbar";
import ParallaxWrapper from "../components/ParallaxWrapper";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "InFocusMedia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <ParallaxWrapper>
            <Navbar />
            {children}
          </ParallaxWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
