import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import clsx from "clsx";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const ReduxProvider = dynamic(() => import("./StoreProvider"), {
  ssr: false,
});

export const metadata = {
  title: "Myagkof Furniture App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="LFzL05vfJF8gEKJvfuHLL3CkUbxPJj-Px10ALJbDtJE"
        />
      </head>
      <body
        className={clsx(inter.className, "flex flex-col min-h-[100vh] w-full")}
      >
        <ReduxProvider>
          <Header />
          <div>{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
