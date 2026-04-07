import { motion } from "motion/react";
import { Star, MessageCircle } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sandra Arellano",
      company: "Cliente MEDLA",
      text: "Los mejores asesores. Fueron muy profesionales, honestos y realistas respecto a mi tramite. Su estrategia hizo que hoy tenga la cobertura perfecta para mi familia.",
      img: "https://framerusercontent.com/images/MaokOOyBtmj1XOlvXLeYXGmszw.png",
    },
    {
      name: "Rodrigo Gonzalez",
      company: "Emprendedor",
      text: "La asesoria que recibi fue excelente. Tienen el conocimiento necesario para brindarte la orientacion que requieres. Me ayudaron a elegir el mejor plan para mi empresa.",
      img: "https://framerusercontent.com/images/Yt8sZ6BXwfqYQs6IpqOSrW2g04.jpg",
    },
    {
      name: "Marianne Castellanos",
      company: "Arquitecta",
      text: "Bastante amables y muy eficaces en su respuesta y atencion. Me explicaron cada detalle de mi poliza sin presiones. Recomiendo ampliamente.",
      img: "https://framerusercontent.com/images/9i6O3Ho3zKhXkGfTkPsE6KYT4w0.png",
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-bold text-brand-accent mb-6 uppercase border border-brand-accent/10">
            <Star size={14} fill="currentColor" /> Testimonios
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-6 tracking-tight">La Confianza de Nuestros Clientes</h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto leading-relaxed">
            Opiniones reales de personas y familias que confian en MEDLA Asesores para proteger su salud y la de sus seres queridos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[40px] border border-white shadow-sm flex flex-col gap-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-brand-accent/20 shadow-md">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary">{review.name}</h4>
                    <p className="text-xs text-brand-muted font-medium">{review.company}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-brand-accent/10 shadow-sm">
                  <MessageCircle size={18} className="text-brand-accent" />
                </div>
              </div>
              <p className="text-brand-text/70 leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-brand-accent" fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="text-brand-accent" fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-bold text-brand-primary">Excelente</span>
          </div>
          <p className="text-sm font-semibold text-brand-text/60">
            Basado en <span className="text-brand-primary">42 resenas</span> en Google
          </p>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-px bg-gradient-to-r from-brand-accent/20 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-px bg-gradient-to-l from-brand-accent/20 to-transparent" />
    </section>
  );
};
