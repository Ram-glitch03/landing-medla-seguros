import { motion, AnimatePresence } from "motion/react";
import { Plus, HelpCircle } from "lucide-react";
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Que es un seguro de gastos medicos mayores?", a: "Es una poliza que cubre hospitalizacion, cirugias, tratamientos especializados y emergencias medicas. Protege tu patrimonio ante imprevistos de salud que pueden representar gastos muy elevados." },
    { q: "Cual es el papel de MEDLA como asesor?", a: "En MEDLA comparamos las mejores opciones del mercado entre diversas aseguradoras para encontrar la cobertura ideal para ti. Te acompanamos desde la cotizacion hasta el uso de tu poliza, sin costo adicional." },
    { q: "Hay periodos de espera para cirugias?", a: "Algunos procedimientos tienen periodos de espera especificos que varian segun la aseguradora. Te explicamos con total transparencia los tiempos exactos antes de que firmes cualquier cosa." },
    { q: "Puedo agregar a mi familia al plan?", a: "Por supuesto. Puedes incluir a tu conyuge, hijos y en algunos planes tambien a tus padres, con tarifas preferenciales y beneficios compartidos." },
    { q: "La asesoria de MEDLA tiene algun costo?", a: "No. Nuestra asesoria es completamente gratuita. Trabajamos con las aseguradoras para ofrecerte el mejor plan sin que pagues nada extra por nuestro servicio." },
    { q: "Que aseguradoras manejan?", a: "Trabajamos con las principales aseguradoras del mercado como GNP, AXA, Zurich, MAPFRE, MetLife y Allianz, entre otras. Esto nos permite ofrecerte la mejor opcion para tu perfil." }
  ];

  return (
    <section id="faq" className="py-48 bg-white relative overflow-hidden tech-grid">
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block glass px-6 py-2.5 rounded-full text-[11px] font-bold text-brand-accent mb-8 border border-brand-accent/10 uppercase tracking-[0.2em]"
          >
            Preguntas Frecuentes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-brand-primary mb-8 tracking-tight"
          >
            Resolvemos tus Dudas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-brand-text/50 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Estamos aqui para ayudarte. Encuentra respuestas a las preguntas mas comunes sobre seguros de gastos medicos y nuestra asesoria.
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[40px] overflow-hidden border border-brand-accent/5 shadow-sm transition-all duration-500 hover:shadow-xl relative"
            >
              <div className="absolute inset-0 scan-line opacity-5 pointer-events-none" />
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-10 flex items-center justify-between text-left group cursor-pointer"
              >
                <span className="text-2xl font-bold text-brand-text/80 group-hover:text-brand-accent transition-colors tracking-tight">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0, backgroundColor: openIndex === i ? "var(--color-brand-accent)" : "rgba(201, 168, 76, 0.05)", color: openIndex === i ? "#1A1A2E" : "var(--color-brand-accent)" }}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-inner flex-shrink-0 ml-4"
                >
                  <Plus size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10 text-brand-text/50 leading-relaxed text-xl border-t border-brand-accent/5 pt-6 mx-10 font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
