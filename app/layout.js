import "./globals.css";
import WhatsAppButton from "./components/WhatsappButton";

export const metadata = {
  title: "Law Firm",
  description: "Professional Legal Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <WhatsAppButton />
      </body>
    </html>
  );
}