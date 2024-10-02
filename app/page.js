import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";
import Why from "../components/Why.jsx";
import Reviews from "@/components/Reviews.jsx";
import Feedback from "@/components/Feedback.jsx";
import Automate from "@/components/Automate.jsx";
import Assessment from "@/components/Assessment.jsx";
import Results from "@/components/Results.jsx";
import Socials from "@/components/Socials.jsx";
import { BaseNextRequest } from "next/dist/server/base-http/index.js";
import Badges from "@/components/Badges.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <div className="bg-heroBG2 lg:bg-heroBG1 bg-cover bg-clip-border bg-no-repeat lg:h-[729px] h-[830px]">
        <Header />
        <Hero />
      </div>
      <Why />
      <Reviews />
      <Feedback />
      <Automate />
      <Assessment />
      <Results />
      <Socials />
      <Badges />
      <Footer />
    </div>
  );
}
