import { motion } from "motion/react";
import { ArrowUpRight, Shield, Star, HeartPulse, ClipboardCheck, Activity, Plus } from "lucide-react";

export const StrategyContent = () => {
  return (
    <section id="strategy" className="py-32 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-brand-primary mb-6 tracking-tight">Prevencion y Bienestar</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Planes Personalizados */}
          <div className="p-12 rounded-[48px] glass border border-white shadow-sm flex flex-col gap-10">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4 text-brand-primary">Planes Comparados para Ti</h3>
              <p className="text-brand-text/60 font-medium">Comparamos las mejores opciones del mercado y te presentamos la que realmente se ajusta a tu vida.</p>
            </div>
            <div className="bg-brand-secondary/20 rounded-[32px] p-10 border border-white/50 relative overflow-hidden h-[300px] flex items-center justify-center">
              <div className="space-y-4 w-full max-w-xs relative z-10">
                <div className="h-10 w-full glass rounded-xl border border-white flex items-center px-4 justify-between">
                  <div className="h-2 w-24 bg-brand-accent/10 rounded-full" />
                  <div className="bg-brand-primary text-white text-[10px] px-3 py-1 rounded-lg font-bold">Cobertura +100%</div>
                </div>
                <div className="h-10 w-full glass rounded-xl border border-white flex items-center px-4 justify-between">
                  <div className="h-2 w-32 bg-brand-accent/10 rounded-full" />
                  <div className="bg-brand-primary text-white text-[10px] px-3 py-1 rounded-lg font-bold">+500 Especialistas</div>
                </div>
                <div className="h-10 w-full glass rounded-xl border border-white flex items-center px-4 justify-between">
                  <div className="h-2 w-20 bg-brand-accent/10 rounded-full" />
                  <div className="bg-brand-primary text-white text-[10px] px-3 py-1 rounded-lg font-bold">Deducible -50%</div>
                </div>
              </div>
              <div className="absolute top-6 right-8 bg-brand-accent/10 text-brand-accent text-[10px] font-bold px-3 py-1.5 rounded-full border border-brand-accent/20 flex items-center gap-1">
                <HeartPulse size={12} /> Salud Activa
              </div>
            </div>
          </div>

          {/* Seguimiento Digital */}
          <div className="p-12 rounded-[48px] glass border border-white shadow-sm flex flex-col gap-10">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4 text-brand-primary">Acompanamiento Continuo</h3>
              <p className="text-brand-text/60 font-medium">No te dejamos solo despues de contratar. Te ayudamos con tramites, siniestros y renovaciones.</p>
            </div>
            <div className="bg-brand-secondary/20 rounded-[32px] p-10 border border-white/50 relative overflow-hidden h-[300px] flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 glass rounded-3xl border border-white shadow-xl rotate-6 flex items-center justify-center p-6">
                   <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="aspect-square bg-brand-accent/5 rounded-xl animate-pulse flex items-center justify-center text-brand-accent/20"><Activity size={24} /></div>
                      <div className="aspect-square bg-brand-primary/5 rounded-xl animate-pulse flex items-center justify-center text-brand-primary/20"><Plus size={24} /></div>
                      <div className="aspect-square bg-brand-accent/5 rounded-xl animate-pulse flex items-center justify-center text-brand-accent/20"><Shield size={24} /></div>
                      <div className="aspect-square bg-brand-primary/5 rounded-xl animate-pulse flex items-center justify-center text-brand-primary/20"><Star size={24} /></div>
                   </div>
                </div>
                <div className="absolute inset-0 glass rounded-3xl border border-white shadow-xl -rotate-3 flex flex-col items-center justify-center gap-4 p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent"><ClipboardCheck size={20} /></div>
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary"><HeartPulse size={20} /></div>
                  </div>
                  <div className="w-full h-2 bg-brand-text/5 rounded-full" />
                  <div className="w-2/3 h-2 bg-brand-text/5 rounded-full" />
                  <div className="mt-2 bg-brand-primary text-white text-[10px] px-4 py-2 rounded-lg font-bold">Gestionar</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#contact" className="btn-primary-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-3 group cursor-pointer">
            Agendar Asesoria Gratuita
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="https://wa.me/5554627166" target="_blank" rel="noopener noreferrer" className="glass text-brand-primary px-10 py-5 rounded-full text-lg font-bold shadow-sm border border-brand-primary/10 hover:bg-brand-primary/5 transition-colors cursor-pointer">
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-0 w-64 h-px bg-gradient-to-r from-brand-accent/10 to-transparent" />
      <div className="absolute top-10 right-0 w-64 h-px bg-gradient-to-l from-brand-accent/10 to-transparent" />
    </section>
  );
};
