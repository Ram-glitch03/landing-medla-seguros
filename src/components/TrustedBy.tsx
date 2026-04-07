export const TrustedBy = () => {
  return (
    <section className="py-20 bg-white border-y border-brand-secondary/40">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <p className="text-[10px] font-bold text-brand-muted uppercase tracking-[0.2em] mb-12">Aseguradoras y partners con los que trabajamos</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {["GNP Seguros", "AXA", "Zurich", "MAPFRE", "MetLife", "Allianz"].map((name, i) => (
            <div key={i} className="px-6 py-3 rounded-full bg-brand-secondary/50 text-brand-primary/40 font-bold text-sm tracking-wide border border-brand-secondary hover:text-brand-accent hover:border-brand-accent/20 transition-all cursor-default">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
