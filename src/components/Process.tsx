import { motion } from "motion/react";
import { Stethoscope, ShieldCheck, HeartPulse, ArrowUpRight, ClipboardCheck, UserPlus } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Analisis Personalizado",
      desc: "Evaluamos tu perfil, historial medico y necesidades familiares para recomendarte la cobertura ideal entre las mejores aseguradoras.",
      icon: ClipboardCheck
    },
    {
      id: "02",
      title: "Cotizacion y Comparativa",
      desc: "Te presentamos opciones claras y transparentes de diferentes aseguradoras para que elijas con toda la informacion.",
      icon: UserPlus
    },
    {
      id: "03",
      title: "Activacion y Acompanamiento",
      desc: "Gestionamos toda la documentacion y activacion de tu poliza. Te acompanamos en cada paso, incluso al usar tu seguro.",
      icon: HeartPulse
    }
  ];

  return (
    <section id="process" className="py-48 bg-white relative overflow-hidden tech-grid">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block glass px-6 py-2.5 rounded-full text-[11px] font-bold text-brand-accent mb-8 border border-brand-accent/10 uppercase tracking-[0.2em]"
          >
            Nuestro Proceso
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-brand-primary mb-8 tracking-tight"
          >
            Asi de Facil es Protegerte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-brand-text/50 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Un proceso simple, transparente y sin complicaciones. En MEDLA nos encargamos de todo para que tu solo te preocupes por vivir.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-accent/5 -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 group"
            >
              <div className="glass p-12 rounded-[48px] border border-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/40 backdrop-blur-sm">
                <div className="absolute top-8 right-8 text-6xl font-display font-black text-brand-accent/5 group-hover:text-brand-accent/10 transition-colors pointer-events-none">
                  {step.id}
                </div>

                <div className="w-20 h-20 rounded-[28px] bg-brand-accent/5 flex items-center justify-center mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-inner relative overflow-hidden text-brand-accent">
                  <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-20" />
                  <step.icon size={36} />
                </div>

                <h3 className="text-3xl font-display font-bold mb-6 tracking-tight text-brand-primary group-hover:text-brand-accent transition-colors">{step.title}</h3>
                <p className="text-lg text-brand-text/50 leading-relaxed font-medium">{step.desc}</p>

                <div className="mt-10 pt-10 border-t border-brand-accent/5">
                   <div className="flex items-center gap-3 text-brand-accent font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                     Saber Mas <ArrowUpRight size={16} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { value: "6+", label: "Anos de experiencia" },
            { value: "200+", label: "Familias protegidas" },
            { value: "24/7", label: "Soporte disponible" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[40px] glass border border-white/40 shadow-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 scan-line opacity-5" />
              <div className="text-6xl font-display font-black text-brand-accent mb-4 tracking-tighter">{stat.value}</div>
              <p className="text-brand-muted font-bold uppercase tracking-[0.2em] text-[11px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
