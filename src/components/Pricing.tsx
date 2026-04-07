import { motion } from "motion/react";
import { Check, Shield, Star, ArrowUpRight } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Esencial",
      price: "Desde $3,500",
      period: "/mes aprox.",
      features: ["Cobertura nacional", "Consultas generales ilimitadas", "Urgencias y hospitalizacion", "Descuentos en farmacias", "Telemedicina basica"],
      popular: false
    },
    {
      name: "Integral",
      price: "Desde $7,000",
      period: "/mes aprox.",
      features: ["Todo lo del plan Esencial", "Red amplia de especialistas", "Cirugias programadas", "Maternidad y recien nacido", "Telemedicina 24/7", "Segundo opinion medica"],
      popular: true
    },
    {
      name: "Elite",
      price: "Desde $15,000",
      period: "/mes aprox.",
      features: ["Todo lo del plan Integral", "Cobertura internacional", "Habitacion premium", "Check-up anual ejecutivo", "Asistencia global VIP", "Medicamentos de alta especialidad"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-48 bg-white relative overflow-hidden tech-grid">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block glass px-6 py-2.5 rounded-full text-[11px] font-bold text-brand-accent mb-8 border border-brand-accent/10 uppercase tracking-[0.2em]"
          >
            Planes a tu Medida
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-brand-primary mb-8 tracking-tight"
          >
            Un escudo financiero <br />para cada estilo de vida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-brand-text/50 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Analizamos todas las aseguradoras del mercado para diseñarte una póliza con la cobertura exacta que necesitas, al precio más competitivo. Cero letra pequeña.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`glass p-12 rounded-[56px] flex flex-col gap-10 border relative transition-all duration-500 hover:-translate-y-2 ${plan.popular ? "border-brand-accent/30 shadow-2xl scale-105 z-10 bg-white" : "border-white/60 shadow-sm"}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-xl">
                  Mas Recomendado
                </div>
              )}

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 scan-line opacity-5" />
                <h3 className="text-2xl font-bold text-brand-primary mb-6 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black text-brand-primary tracking-tighter">{plan.price}</span>
                  <span className="text-brand-muted font-bold uppercase tracking-widest text-xs">{plan.period}</span>
                </div>
              </div>

              <a href="#contact" className={`w-full py-6 rounded-full font-bold text-lg transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 active:scale-95 text-center block ${plan.popular ? "btn-primary-gradient text-white" : "glass text-brand-primary border border-brand-primary/10 hover:bg-brand-primary/5"}`}>
                Cotizar Ahora
              </a>

              <div className="space-y-6">
                <p className="text-[11px] font-bold text-brand-muted uppercase tracking-[0.2em]">{plan.name} incluye:</p>
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-brand-accent" />
                    </div>
                    <span className="text-base font-medium text-brand-text/60">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col md:flex-row items-center justify-center gap-6 glass p-10 rounded-[40px] max-w-3xl mx-auto border border-white/60 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 scan-line opacity-5" />
          <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shadow-inner">
            <Star size={28} fill="currentColor" />
          </div>
          <p className="text-xl text-brand-text/60 font-bold text-center md:text-left leading-tight">
            El costo se personaliza por perfil, sumas aseguradas y deducciones aplicables. <br /> <span className="text-brand-accent">Hablemos para encontrar tu configuración ideal.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
