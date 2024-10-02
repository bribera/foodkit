import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Food Kit",
  description: "Enjoy your food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="w-full h-full"
      >
        {children}
      </body>
    </html>
  );
}
