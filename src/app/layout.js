import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import "./globals.css";

export const metadata = {
  title: "Agricare Planet FZ - LLC",
  description:
    "Agricare Planet FZ-LLC is the UAE's leading organic fertilizer supplier, promoting sustainable agriculture with innovative, eco-friendly soil solutions for a healthier future.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
