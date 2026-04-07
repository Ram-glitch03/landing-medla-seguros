import { motion } from "motion/react";
import { Check, X, Globe, Shield } from "lucide-react";

export const Comparison = () => {
  const points = [
    { us: "Asesoria personalizada y sin costo", others: "Ventas genericas sin analisis" },
    { us: "Comparamos multiples aseguradoras", others: "Solo venden una marca" },
    { us: "Acompanamiento en siniestros", others: "Te dejan solo con la aseguradora" },
    { us: "Sin letras chiquitas, todo transparente", others: "Clausulas confusas y exclusiones" },
    { us: "Soporte 24/7 por WhatsApp y telefono", others: "Soporte generico y tardado" }
  ];

  return (
    <section id="comparison" className="py-48 bg-white relative overflow-hidden tech-grid">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block glass px-6 py-2.5 rounded-full text-[11px] font-bold text-brand-accent mb-8 border border-brand-accent/10 uppercase tracking-[0.2em]"
          >
            Comparativa
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-brand-primary mb-8 tracking-tight"
          >
            Por que Elegir MEDLA?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-brand-text/50 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            La diferencia entre contratar un seguro solo y contar con un asesor experto que te acompane en cada paso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-[24px] glass flex items-center justify-center shadow-xl border border-brand-accent/20 glow-pulse">
                <Shield size={32} className="text-brand-accent" />
              </div>
              <h3 className="text-3xl font-display font-bold text-brand-primary tracking-tight">MEDLA Asesores</h3>
            </div>
            <div className="glass rounded-[48px] overflow-hidden border border-white shadow-2xl relative">
              <div className="absolute inset-0 scan-line opacity-5" />
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-10 flex items-center gap-6 ${i !== points.length - 1 ? "border-b border-brand-accent/5" : ""}`}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check size={18} className="text-brand-accent" />
                  </div>
                  <p className="font-bold text-brand-text/80 text-xl leading-tight">{p.us}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-[24px] bg-brand-text/5 flex items-center justify-center border border-brand-text/5">
                <Globe size={32} className="text-brand-text/20" />
              </div>
              <h3 className="text-3xl font-display font-bold text-brand-text/30 tracking-tight">Agentes Tradicionales</h3>
            </div>
            <div className="bg-white/40 border border-brand-text/5 rounded-[48px] overflow-hidden">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-10 flex items-center gap-6 ${i !== points.length - 1 ? "border-b border-brand-text/5" : ""}`}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-text/5 flex items-center justify-center flex-shrink-0">
                    <X size={18} className="text-brand-text/20" />
                  </div>
                  <p className="font-semibold text-brand-text/30 text-xl leading-tight">{p.others}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
