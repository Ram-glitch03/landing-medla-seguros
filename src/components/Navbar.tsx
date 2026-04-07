import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Coberturas", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Planes", href: "#pricing" },
    { name: "Preguntas", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300 ${isScrolled ? "top-4" : "top-6"}`}>
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
            <Shield size={16} className="text-brand-accent" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-brand-primary">MEDLA</span>
          <span className="text-[10px] font-medium text-brand-muted uppercase tracking-widest hidden sm:block">Asesores</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-brand-text/70 hover:text-brand-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block btn-primary-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition-opacity cursor-pointer">
            Agenda tu Cita
          </a>
          <button
            className="md:hidden p-2 text-brand-primary cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 glass rounded-3xl p-6 shadow-xl md:hidden border border-white/20"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-brand-text/80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary-gradient text-white w-full py-4 rounded-2xl text-lg font-semibold mt-4 cursor-pointer text-center block">
                Agenda tu Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
