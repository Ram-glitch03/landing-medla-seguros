import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ArrowUpRight, Heart } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Emergencia Medica en el Extranjero",
      desc: "Coordinamos con la aseguradora una evacuacion medica y cirugia de urgencia en Europa, cubriendo el 100% de los gastos sin complicaciones.",
      year: "2025",
      client: "Familia Garcia",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Tratamiento Oncologico Cubierto",
      desc: "Gestionamos el acceso inmediato a oncologos de renombre y cobertura total de medicamentos de ultima generacion para nuestro cliente.",
      year: "2024",
      client: "Roberto M.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Maternidad Sin Preocupaciones",
      desc: "Acompanamiento integral desde el primer mes de embarazo hasta el primer ano del bebe, con atencion pediatrica incluida en la poliza.",
      year: "2023",
      client: "Ana y Sofia",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="projects" className="py-48 bg-white relative overflow-hidden tech-grid">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-24 items-start">
          <div className="md:w-1/2 sticky top-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block glass px-6 py-2.5 rounded-full text-[11px] font-bold text-brand-accent mb-8 border border-brand-accent/10 uppercase tracking-[0.2em]"
            >
              Casos de Exito
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-brand-primary mb-10 tracking-tight leading-[0.95]"
            >
              Historias de <br /> <span className="text-brand-accent">Proteccion.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-brand-text/50 mb-12 leading-relaxed font-medium"
            >
              Descubre como MEDLA Asesores ha marcado la diferencia en los momentos mas criticos, brindando tranquilidad y soluciones reales a nuestros clientes.
            </motion.p>

            <div className="space-y-6">
              {projects.map((p, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setActiveProject(i)}
                  className={`w-full text-left p-8 rounded-[32px] transition-all duration-500 flex items-center justify-between group cursor-pointer border ${activeProject === i ? "glass shadow-xl border-brand-accent/20 bg-white" : "border-transparent hover:bg-brand-secondary/20"}`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg transition-all duration-500 ${activeProject === i ? "bg-brand-primary text-white" : "bg-brand-accent/10 text-brand-accent"}`}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className={`text-2xl font-bold transition-colors ${activeProject === i ? "text-brand-primary" : "text-brand-text/60"}`}>{p.client}</h4>
                      <p className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeProject === i ? "text-brand-accent" : "text-brand-muted"}`}>{p.year}</p>
                    </div>
                  </div>
                  <ChevronRight className={`transition-transform duration-500 ${activeProject === i ? "translate-x-2 text-brand-accent" : "text-brand-text/20"}`} />
                </motion.button>
              ))}
            </div>

            <motion.a
              href="https://medla-asesores.com/agenda-tu-cita/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-3 text-brand-accent font-bold text-sm uppercase tracking-widest group"
            >
              Protege a tu familia hoy <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="aspect-[4/5] rounded-[64px] overflow-hidden relative shadow-2xl glass p-6 border border-white/60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full rounded-[48px] overflow-hidden relative group"
                >
                  <img
                    src={projects[activeProject].img}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent flex flex-col justify-end p-12">
                    <div className="absolute inset-0 scan-line opacity-20 pointer-events-none" />
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl font-display font-bold text-white mb-6 tracking-tight"
                    >
                      {projects[activeProject].title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl text-white/80 leading-relaxed font-medium"
                    >
                      {projects[activeProject].desc}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
