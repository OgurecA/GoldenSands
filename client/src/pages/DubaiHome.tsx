import { Helmet } from "react-helmet";
import Header from "@/components/dubai/Header";
import TopSections from "@/components/dubai/TopSections";
import RelocationSection from "@/components/dubai/RelocationSection";
import BankAccountSection from "@/components/dubai/BankAccountSection";
import BusinessSetupSection from "@/components/dubai/BusinessSetupSection";
import LoanSection from "@/components/dubai/LoanSection";
import LogoMarquee from "@/components/dubai/LogoMarquee";
import CallToAction from "@/components/dubai/CallToAction";
import Footer from "@/components/dubai/Footer";
import CookieConsent from "@/components/dubai/CookieConsent";

export default function DubaiHome() {
  return (
    <>
      <Helmet>
        <title>Dubai Living - Your Relocation Guide</title>
        <meta name="description" content="Your ultimate guide to living in Dubai. Get assistance with visas, bank accounts, loans, and more to make your move stress-free." />
        <meta property="og:title" content="Dubai Living - Your Relocation Guide" />
        <meta property="og:description" content="Get assistance with visas, bank accounts, loans, and more to make your move to Dubai stress-free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dubailiving.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1546412414-e1885e51148b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Header />
      
      <main>
        <TopSections />
        <RelocationSection />
        <BankAccountSection />
        <BusinessSetupSection />
        <LoanSection />
        <LogoMarquee />
        <CallToAction />
      </main>
      
      <Footer />
      <CookieConsent />
    </>
  );
}