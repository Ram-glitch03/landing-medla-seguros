import { motion } from "motion/react";
import { ArrowUpRight, Instagram, Facebook, Linkedin, Users } from "lucide-react";

export const Community = () => {
  return (
    <section id="community" className="py-32 bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#1A1A2E 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-bold text-brand-accent mb-6 uppercase border border-brand-accent/10 tracking-widest">
              <Users size={14} fill="currentColor" className="opacity-50" /> Comunidad MEDLA
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-8 tracking-tight leading-[1.1]">Unete a la familia MEDLA</h2>
            <p className="text-lg text-brand-text/70 mb-10 leading-relaxed max-w-xl">
              Siguenos en nuestras redes sociales para recibir consejos de salud, novedades sobre coberturas y tips para proteger a tu familia.
            </p>
          </div>
          <div className="lg:w-1/2 w-full pt-10">
            <div className="h-px w-full bg-gradient-to-r from-brand-accent/10 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Instagram Card */}
          <motion.a
            href="https://instagram.com/medla_asesores"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[48px] border border-white shadow-sm flex flex-col gap-8 relative group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                   <Instagram size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-primary">Instagram</h3>
              </div>
              <ArrowUpRight className="text-brand-text/20 group-hover:text-brand-accent transition-colors" size={32} />
            </div>
            <div className="h-px w-full bg-brand-accent/5" />
            <p className="text-lg text-brand-text/70 leading-relaxed font-medium">
              Tips de salud, contenido sobre seguros explicado de forma sencilla y novedades de MEDLA Asesores.
            </p>
            <div className="flex gap-3">
              <span className="px-5 py-2 rounded-xl bg-brand-accent/5 text-brand-accent text-xs font-bold uppercase tracking-wider">@medla_asesores</span>
              <span className="px-5 py-2 rounded-xl bg-brand-accent/5 text-brand-accent text-xs font-bold uppercase tracking-wider">Bienestar</span>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/company/medla-asesores"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[48px] border border-white shadow-sm flex flex-col gap-8 relative group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-700/10 flex items-center justify-center text-blue-700">
                   <Linkedin size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-primary">LinkedIn</h3>
              </div>
              <ArrowUpRight className="text-brand-text/20 group-hover:text-brand-accent transition-colors" size={32} />
            </div>
            <div className="h-px w-full bg-brand-accent/5" />
            <p className="text-lg text-brand-text/70 leading-relaxed font-medium">
              Noticias del sector asegurador, alianzas estrategicas y actualizaciones sobre nuestros servicios corporativos.
            </p>
            <div className="flex gap-3">
              <span className="px-5 py-2 rounded-xl bg-brand-accent/5 text-brand-accent text-xs font-bold uppercase tracking-wider">Corporativo</span>
              <span className="px-5 py-2 rounded-xl bg-brand-accent/5 text-brand-accent text-xs font-bold uppercase tracking-wider">Noticias</span>
            </div>
          </motion.a>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-brand-accent">Siguenos :</span>
          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: "https://instagram.com/medla_asesores" },
              { Icon: Facebook, href: "https://facebook.com/medlaasesores" },
              { Icon: Linkedin, href: "https://linkedin.com/company/medla-asesores" }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-accent hover:bg-brand-primary hover:text-white transition-all shadow-sm border border-brand-accent/10">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
