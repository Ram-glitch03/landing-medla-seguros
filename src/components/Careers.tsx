import { motion } from "motion/react";
import { ArrowUpRight, Shield, HeartPulse, Scale } from "lucide-react";

export const Careers = () => {
  const pillars = [
    {
      title: "Soluciones a Medida",
      desc: "Cada caso es unico. Disenamos estrategias personalizadas para encontrar el seguro que realmente necesitas, sin pagar de mas.",
      tags: ["Personalizado", "Sin letra chiquita"]
    },
    {
      title: "Informacion Exacta",
      desc: "Sin tecnicismos innecesarios. Te explicamos cada detalle de tu poliza con claridad en cada paso del proceso.",
      tags: ["Transparente", "Sin presion"]
    }
  ];

  return (
    <section id="careers" className="py-32 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-brand-primary mb-6 tracking-tight">Dedicados. Cercanos. Expertos.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="rounded-[48px] overflow-hidden h-[400px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
              alt="Equipo MEDLA"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-12 rounded-[48px] bg-brand-secondary/30 border border-white flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-display italic text-brand-primary leading-relaxed mb-8">
                " En MEDLA, cada persona que cruza nuestra puerta es importante. Trabajamos para proteger lo que mas valoras „
              </h3>
              <p className="font-bold text-brand-muted uppercase tracking-widest text-xs">Equipo MEDLA Asesores</p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[40px] border border-white shadow-sm flex flex-col gap-8 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                    {i === 0 ? <Shield size={28} /> : <Scale size={28} />}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-brand-primary">{pillar.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-text/20 group-hover:text-brand-accent transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <p className="text-brand-text/70 leading-relaxed font-medium">{pillar.desc}</p>
              <div className="flex flex-wrap gap-3">
                {pillar.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-2 rounded-xl bg-brand-accent/5 text-brand-accent text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#contact" className="btn-primary-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 group cursor-pointer">
            <HeartPulse size={18} /> Agenda tu Cita
          </a>
          <a href="https://wa.me/5554627166" target="_blank" rel="noopener noreferrer" className="glass text-brand-primary px-8 py-4 rounded-full font-bold shadow-sm border border-brand-primary/10 hover:bg-brand-primary/5 transition-colors cursor-pointer">
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute top-10 left-0 w-64 h-px bg-gradient-to-r from-brand-accent/10 to-transparent" />
      <div className="absolute top-10 right-0 w-64 h-px bg-gradient-to-l from-brand-accent/10 to-transparent" />
    </section>
  );
};
