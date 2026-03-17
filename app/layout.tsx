import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Sunku Giridhar Shanmukh | DevOps x Full Stack",
  description: "Futuristic gamer-style portfolio for Sunku Giridhar Shanmukh, DevOps Engineer and Full Stack Developer."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cyberBg text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

