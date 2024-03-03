import { Inter } from "next/font/google";
import style from  "./index.module.css";


export const metadata = {
  title: "TDG",
  description: "TDG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.main}>{children}</body>
    </html>
  );
}
