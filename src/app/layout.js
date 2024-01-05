import "./globals.css";
import { Basic } from "next/font/google";

export const metadata = {
  title: "Event Hunt",
  description: "Event Navigator",
};

const basic = Basic({
  weight: "400",
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={basic.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
