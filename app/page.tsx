import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Socials from "@/components/Socials";
import SignUp from "@/components/SignUp";
import BombaApp from "@/components/BombaApp";
import TrustedPartners from "@/components/TrustedPartners";
import ConverterForm from "@/components/ConverterForm";
import MobileNav from "@/components/MobileNav";


export default function Press() {
  return (
    <main>
      
      <Header />
      <MobileNav />

      <HeroSection />

      <ConverterForm />

      <BombaApp />

      <TrustedPartners />

       <SignUp />

      <Socials />
    </main>
  );
}
