import { Instagram, Facebook, Linkedin, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-32 pb-10 hero-gradient border-t border-brand-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shadow-lg">
                <Shield size={20} className="text-brand-accent" />
              </div>
              <span className="text-2xl font-display font-bold text-brand-primary tracking-tight">MEDLA Asesores</span>
            </div>
            <p className="text-brand-text/60 leading-relaxed font-medium mb-6">
              Tu mejor aliado para encontrar el seguro de gastos medicos ideal. Asesoria personalizada, transparente y sin costo.
            </p>
            <div className="space-y-2 text-sm text-brand-text/50">
              <p>Madrid: (+34) 914-321-457</p>
              <p>Mexico: (+52) 55-4627-1661</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold text-brand-primary uppercase tracking-widest text-[10px]">Servicios</h4>
              <ul className="space-y-4 text-brand-text/60 font-semibold text-sm">
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Coberturas</a></li>
                <li><a href="#process" className="hover:text-brand-accent transition-colors">Proceso</a></li>
                <li><a href="#pricing" className="hover:text-brand-accent transition-colors">Planes</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-brand-primary uppercase tracking-widest text-[10px]">Empresa</h4>
              <ul className="space-y-4 text-brand-text/60 font-semibold text-sm">
                <li><a href="https://medla-asesores.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Nosotros</a></li>
                <li><a href="https://medla-empresas.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Empresas</a></li>
                <li><a href="#faq" className="hover:text-brand-accent transition-colors">Preguntas</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-brand-primary uppercase tracking-widest text-[10px]">Redes Sociales</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/medla_asesores" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-accent hover:bg-brand-primary hover:text-white transition-all shadow-sm border border-brand-accent/10">
                  <span className="sr-only">Instagram</span>
                  <Instagram size={18} />
                </a>
                <a href="https://facebook.com/medlaasesores" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-accent hover:bg-brand-primary hover:text-white transition-all shadow-sm border border-brand-accent/10">
                  <span className="sr-only">Facebook</span>
                  <Facebook size={18} />
                </a>
                <a href="https://linkedin.com/company/medla-asesores" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-accent hover:bg-brand-primary hover:text-white transition-all shadow-sm border border-brand-accent/10">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-muted font-bold uppercase tracking-widest">
          <p>2026 MEDLA Asesores. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors underline decoration-brand-accent/20 underline-offset-4">Privacidad</a>
            <a href="#" className="hover:text-brand-accent transition-colors underline decoration-brand-accent/20 underline-offset-4">Terminos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
