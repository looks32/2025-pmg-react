import "@/css/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "PMG",
  description: "PMG Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="wrap">
          <header>헤더</header>
          {children}
        </div>
      </body>
    </html>
  );
}
