import "./globals.css";

export const metadata = {
  title: "Law Firm",
  description: "Professional Legal Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}