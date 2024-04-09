import Image from "next/image";
import styles from "./page.module.css";
export const metadata = {
  title: "Muscis courses",
  description: "We provided the qulity of musics courses",
};
import HeroSection from "@/components/HeroSection";
import FeaturesCources from "@/components/FeaturesCources";
// import Footer from "@/components/Footer";
import Webniers from "@/components/Webniers";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesCources />
        <Webniers />
        {/* <Footer /> */}
      </main>
    </>
  );
}
