import { motion } from "motion/react";
import { Heart, ShieldCheck, Activity, Plus } from "lucide-react";

export const Integrations = () => {
  return (
    <section id="integrations" className="py-32 bg-brand-secondary/30 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
            <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold text-brand-accent mb-6 uppercase border border-brand-accent/10 tracking-widest">Nuestra Red</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-8 tracking-tight leading-[1.1]">Aseguradoras Lideres a tu Alcance</h2>
            <p className="text-lg text-brand-text/70 mb-10 leading-relaxed">
              Trabajamos con las aseguradoras mas reconocidas del mercado para ofrecerte las mejores coberturas, precios y beneficios. Tu solo elige, nosotros negociamos por ti.
            </p>
            <a href="#contact" className="btn-primary-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity cursor-pointer inline-block">
              Solicitar Cotizacion
            </a>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="glass rounded-[48px] p-12 border border-white/60 shadow-2xl relative overflow-hidden aspect-square flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 relative z-10">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, i % 2 === 0 ? -10 : 10, 0],
                      rotate: [0, i % 2 === 0 ? 2 : -2, 0]
                    }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="w-20 h-20 rounded-3xl glass shadow-sm border border-white flex items-center justify-center p-4 text-brand-accent"
                  >
                    {i % 4 === 0 ? <Heart size={32} fill="currentColor" opacity={0.2} /> :
                     i % 4 === 1 ? <Activity size={32} opacity={0.2} /> :
                     i % 4 === 2 ? <ShieldCheck size={32} opacity={0.2} /> :
                     <Plus size={32} opacity={0.2} />}
                  </motion.div>
                ))}
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.08),transparent_70%)]" />
            </div>
            <p className="text-center mt-8 text-brand-muted font-bold uppercase tracking-widest text-xs italic">
              "Conectamos con las mejores aseguradoras del mercado"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
