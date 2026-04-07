import { motion } from "motion/react";
import { Heart, Shield, Activity, Plus, Stethoscope, Phone, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-48 pb-40 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-white tech-grid">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-brand-accent/5 blur-[140px] rounded-full opacity-60" />
        <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-brand-primary/5 blur-[180px] rounded-full opacity-40" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-10 shadow-sm border border-brand-accent/20"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-brand-accent uppercase">Seguros de Gastos Medicos Mayores</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-brand-primary mb-10 leading-[0.95]"
        >
          Protege lo que más importa <br /> <span className="text-brand-accent">al mejor precio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-brand-text/50 max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
        >
          Compara, elige y ahorra en tu póliza de Gastos Médicos Mayores. En MEDLA Asesores diseñamos un escudo a tu medida para que tú y tu familia disfruten cada instante con total tranquilidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <a href="https://medla-asesores.com/agenda-tu-cita/" target="_blank" rel="noopener noreferrer" className="btn-primary-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group cursor-pointer relative overflow-hidden">
            <Shield className="relative z-10" />
            <span className="relative z-10">Cotiza tu Seguro Gratis</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          <a href="https://wa.me/5554627166" target="_blank" rel="noopener noreferrer" className="glass text-brand-primary px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-brand-primary/5 transition-all flex items-center gap-3 group cursor-pointer">
            <Phone size={20} />
            <span>Hablar con un Asesor</span>
          </a>
        </motion.div>

        {/* Medical Visual - Heartbeat/Pulse Animation */}
        <div className="relative max-w-2xl mx-auto h-[500px] flex items-center justify-center">
          {/* Center Card - Main Protection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute z-20 w-64 h-64 glass rounded-[48px] border border-brand-accent/20 shadow-2xl flex flex-col items-center justify-center text-brand-primary glow-pulse"
          >
            <Heart size={80} fill="currentColor" className="opacity-10 mb-4" />
            <Heart size={64} className="absolute text-brand-accent animate-pulse" />
            <div className="absolute inset-0 scan-line opacity-10" />
            <p className="mt-16 font-display font-bold text-brand-primary">Proteccion Total</p>
          </motion.div>

          {/* Floating Medical Icons */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10 -translate-x-48 -translate-y-32 w-32 h-32 glass rounded-[32px] border border-brand-accent/10 shadow-xl flex items-center justify-center text-brand-accent/60"
          >
            <Stethoscope size={48} />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute z-10 translate-x-48 -translate-y-32 w-32 h-32 glass rounded-[32px] border border-brand-accent/10 shadow-xl flex items-center justify-center text-brand-accent/60"
          >
            <Activity size={48} />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute z-10 translate-y-40 w-32 h-32 glass rounded-[32px] border border-brand-accent/10 shadow-xl flex items-center justify-center text-brand-accent/60"
          >
            <Plus size={48} />
          </motion.div>

          {/* Heartbeat Line Decorative */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 400">
            <motion.path
              d="M0,200 L100,200 L120,150 L140,250 L160,200 L300,200 L320,50 L340,350 L360,200 L500,200 L520,180 L540,220 L560,200 L800,200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-brand-accent"
            />
          </svg>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full scale-[1.8] opacity-60" />
        </div>
      </div>
    </section>
  );
};
