import { motion } from "motion/react";
import { Shield, Star, ArrowUpRight, Sparkles } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { ServicesGrid } from "./components/ServicesGrid";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { StrategyContent } from "./components/StrategyContent";
import { Integrations } from "./components/Integrations";
import { Comparison } from "./components/Comparison";
import { Testimonials } from "./components/Testimonials";
import { Careers } from "./components/Careers";
import { Community } from "./components/Community";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-primary font-sans text-brand-text bg-brand-bg overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <ServicesGrid />
        <Process />
        <Projects />
        <StrategyContent />
        <Integrations />
        <Comparison />
        <Testimonials />
        <Careers />
        <Community />
        <Pricing />
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-70" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-16 md:p-24 rounded-[64px] border border-brand-accent/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

              <Sparkles className="text-brand-accent/20 absolute top-10 left-10" size={48} />
              <Sparkles className="text-brand-accent/20 absolute bottom-10 right-10" size={48} />

              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight text-brand-primary">
                Listo para proteger <br /> a tu <span className="text-brand-accent">familia?</span>
              </h2>
              <p className="text-lg text-brand-text/60 mb-12 max-w-xl mx-auto font-medium">
                Agenda una asesoria gratuita con MEDLA y descubre el seguro de gastos medicos ideal para ti. Sin compromiso, sin costos ocultos.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                  href="https://medla-asesores.com/agenda-tu-cita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-3 group cursor-pointer"
                >
                  Agendar Asesoria Gratuita
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/5554627166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass text-brand-primary px-10 py-5 rounded-full text-lg font-bold shadow-sm border border-brand-primary/10 hover:bg-brand-primary/5 transition-colors cursor-pointer"
                >
                  Hablar por WhatsApp
                </a>
              </div>

              <div className="mt-16 flex flex-wrap justify-center gap-10">
                <div className="flex items-center gap-2 font-bold text-brand-primary uppercase tracking-widest text-[10px] opacity-60">
                  <Shield size={16} /> Asesoria 100% gratuita
                </div>
                <div className="flex items-center gap-2 font-bold text-brand-accent uppercase tracking-widest text-[10px] opacity-60">
                  <Star size={16} /> 42 resenas Excelente en Google
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
