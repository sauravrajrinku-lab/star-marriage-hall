export default function Stats() {
  const statsList = [
    { number: "2,000+", label: "Weddings Hosted" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50,000+", label: "Happy Guests" },
    { number: "4.9 ★", label: "Client Rating" },
  ];

  return (
    <section className="relative bg-foreground text-background py-16 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[200px] h-[200px] bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-border/10">
          {statsList.map((stat, index) => (
            <div
              key={index}
              className={`space-y-2 py-4 lg:py-0 ${index > 1 ? "border-t lg:border-t-0" : ""}`}
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-background/70 uppercase tracking-widest font-semibold font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
