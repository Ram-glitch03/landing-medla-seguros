import { motion } from "motion/react";
import { Heart, Activity, PhoneCall, ShieldCheck, Users, Clock, Star, Globe, Stethoscope, ArrowUpRight, Cross, Pill } from "lucide-react";

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-48 bg-white tech-grid">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Medical Services Header Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[64px] bg-brand-secondary/30 border border-white flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-primary mb-10 tracking-tight">Coberturas a tu Medida</h2>
              <ul className="space-y-8">
                {[
                  { title: "Gastos Medicos Mayores", desc: "Hospitalizacion, cirugias y tratamientos especializados con las mejores aseguradoras." },
                  { title: "Asesoria Personalizada", desc: "Te ayudamos a elegir la cobertura ideal segun tus necesidades y presupuesto." }
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <Star size={14} className="text-brand-accent" fill="currentColor" />
                    </div>
                    <p className="text-xl font-medium text-brand-text/80">
                      <span className="font-bold text-brand-primary">{item.title}:</span> {item.desc}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16 relative z-10">
              {[
                { icon: ShieldCheck, title: "Cobertura Amplia", desc: "Proteccion ante cualquier eventualidad medica con respaldo de aseguradoras lideres." },
                { icon: Activity, title: "Seguimiento Total", desc: "Te acompanamos desde la cotizacion hasta el uso de tu poliza, siempre disponibles." }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass p-10 rounded-[40px] border border-white shadow-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8">
                    <card.icon className="text-brand-accent" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-brand-primary">{card.title}</h4>
                  <p className="text-base text-brand-text/50 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Telemedicine & Digital Health Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[64px] glass border border-white shadow-sm flex flex-col relative overflow-hidden"
          >
            <div className="mb-16">
              <h3 className="text-4xl font-display font-bold mb-6 tracking-tight text-brand-primary">Telemedicina Incluida.</h3>
              <p className="text-xl text-brand-text/50 font-medium">Nuestros planes incluyen consultas virtuales con especialistas, disponibles las 24 horas.</p>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-full aspect-square max-w-md rounded-[48px] bg-brand-secondary/20 border border-white/50 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 scan-line opacity-5" />
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 border-2 border-dashed border-brand-accent/10 rounded-full animate-[spin_30s_linear_infinite]" />
                  <div className="absolute inset-8 border border-brand-accent/5 rounded-full animate-[spin_20s_linear_reverse_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold shadow-2xl z-10 text-lg flex items-center gap-2"
                    >
                      <PhoneCall size={20} />
                      Video Consulta
                    </motion.div>
                  </div>
                  {[Stethoscope, Pill, Heart, Activity].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: 360,
                        x: Math.cos(i * Math.PI / 2) * 120,
                        y: Math.sin(i * Math.PI / 2) * 120
                      }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl glass border border-white shadow-lg flex items-center justify-center text-brand-accent"
                    >
                      <Icon size={24} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Specialist Network Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[64px] glass border border-white shadow-sm flex flex-col group"
          >
            <div className="mb-16">
              <h3 className="text-4xl font-display font-bold mb-6 tracking-tight text-brand-primary">Red Medica de Prestigio</h3>
              <p className="text-xl text-brand-text/50 font-medium">Acceso a los hospitales y laboratorios mas reconocidos del pais.</p>
            </div>
            <div className="bg-brand-secondary/20 rounded-[48px] p-12 border border-white/50 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute inset-0 scan-line opacity-5" />
              <div className="flex flex-wrap gap-4">
                {["Hospital Angeles", "Centro Medico ABC", "Medica Sur", "Hospital Espanol", "Star Medica"].map((hosp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass px-6 py-3 rounded-2xl text-brand-primary font-bold border border-brand-accent/10 shadow-sm"
                  >
                    {hosp}
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-8 glass rounded-3xl border border-white/60">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                    <Users size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-brand-primary">Directorio Medico Amplio</h5>
                    <p className="text-sm text-brand-text/50">Encuentra a tu especialista con facilidad.</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-brand-primary/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-accent"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global Assistance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[64px] glass border border-white shadow-sm flex flex-col"
          >
            <div className="mb-16">
              <h3 className="text-4xl font-display font-bold mb-6 tracking-tight text-brand-primary">Cobertura Internacional</h3>
              <p className="text-xl text-brand-text/50 font-medium">Viaja tranquilo con proteccion medica en mas de 150 paises.</p>
            </div>
            <div className="bg-brand-secondary/20 rounded-[48px] p-12 border border-white/50 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute inset-0 scan-line opacity-5" />
              <div className="flex items-center justify-center py-10">
                <div className="relative">
                  <Globe size={120} className="text-brand-accent/20 animate-pulse" />
                  <motion.div
                    animate={{
                      x: [0, 100, 0, -100, 0],
                      y: [0, -50, -100, -50, 0],
                      opacity: [0, 1, 1, 1, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-accent"
                  >
                    <ShieldCheck size={32} />
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-white/80 p-6 rounded-3xl shadow-sm border border-white">
                <div>
                  <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-1">Cobertura en</p>
                  <p className="text-xl font-bold text-brand-primary">Mas de 150 paises</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Globe size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {["Atencion 24/7", "Red Global", "Telemedicina", "Gastos Medicos", "Cirugias", "Maternidad", "Dental y Vision"].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass px-8 py-4 rounded-full text-base font-bold text-brand-text/40 border border-white/60 shadow-sm flex items-center gap-3 hover:text-brand-accent hover:border-brand-accent/20 transition-all cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-brand-accent/30" />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
