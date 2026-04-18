import { useState } from "react";

{
  /* Sections*/
}

import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import PricingSection from "./components/PricingSection";
import Header from "./components/HeaderSection";
import Hero from "./components/HeroSection"; 
import SocialProof from "./components/SocialProofSection";
import Features from "./components/FeaturesSection";
import Testimonials from "./components/TestimonialsSection";
import UseCases from "./components/UseCasesSection";


// import SectionEditorModal from "./components/Modal";


export default function DeploylyLanding() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  return (
    <div className="min-h-screen text-neutral-950 bg-neutral-100 font-sans scrollbar">
      <Header setModal={setIsModalOpen} />

      <section>
        {/* <SectionEditorModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        /> */}
      </section>
      <main>
        <section id="hero">
          <Hero
            setModal={setIsModalOpen}
            showToast={showToast}
            setShowToast={setShowToast}
          />
        </section>

        <section id="social-proof">
          <SocialProof />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="use-cases">
          <UseCases />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="pricing">
          <PricingSection showToast={showToast} setShowToast={setShowToast} />
        </section>

        <section id="cta">
          <CTASection setModal={setIsModalOpen} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
