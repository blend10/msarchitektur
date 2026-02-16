import { motion } from "motion/react";
import { Calendar, DollarSign, Home, MapPin, Users } from "lucide-react";

const timeline = [
  {
    phase: "Analyse & Strategie",
    duration: "3 Wochen",
    color: "#FF6B35",
    activities: ["Standortanalyse", "Kundeninterviews", "Machbarkeitsstudie"],
  },
  {
    phase: "Design & Planung",
    duration: "7 Wochen",
    color: "#00B4D8",
    activities: ["Konzeptdesign", "Technische Entwicklung", "Materialauswahl"],
  },
  {
    phase: "Dokumentation & Genehmigungen",
    duration: "5 Wochen",
    color: "#06FFA5",
    activities: [
      "Bauunterlagen",
      "Genehmigungseinreichung",
      "Genehmigungsprozess",
    ],
  },
  {
    phase: "Ausführung & Lieferung",
    duration: "24 Wochen",
    color: "#A78BFA",
    activities: ["Bauaufsicht", "Qualitätskontrolle", "Projektabschluss"],
  },
];

export function CaseExample() {
  return (
    <div className="bg-transparent">
      <div className="relative  z-10 container  mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-white animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Casa Five
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Casa Five{" "}
            <span className="font-normal bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Entwicklung
            </span>
          </h2>
          <p className="text-md text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Eine luxuriöse Wohnanlage, die unsere vollständige Methodik von{" "}
            <br /> der Vision zur Realität präsentiert.
          </p>
        </motion.div>

        {/* Project Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative rounded-3xl overflow-hidden group"
        >
          <div className="absolute inset-0 h-[800px] bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          <motion.img
            src="/images/gallery2.jpg"
            alt="Casa Five Development"
            className="w-full h-[800px] object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          />

          {/* Image overlay info */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-white">
                <MapPin className="w-5 h-5" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Standort</div>
                  <div className="font-medium">Privatbesitz</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Home className="w-5 h-5" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Typ</div>
                  <div className="font-medium">5 Luxuswohnungen</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Users className="w-5 h-5" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Kunde</div>
                  <div className="font-medium">Privater Entwickler</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: Calendar,
              value: "39 Wochen",
              label: "Gesamtdauer",
              color: "#FF6B35",
            },
            {
              icon: DollarSign,
              value: "+2%",
              label: "Budgetabweichung",
              color: "#06FFA5",
            },
            {
              icon: Home,
              value: "5 Einheiten",
              label: "3.200 Quadratfuß jeweils",
              color: "#00B4D8",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center overflow-hidden"
              >
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${stat.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                    style={{
                      backgroundColor: `${stat.color}20`,
                      borderWidth: "1px",
                      borderColor: `${stat.color}40`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </motion.div>
                  <div className="text-4xl font-light text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline section title */}

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5" />

          <div className="space-y-2">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex items-start gap-6 md:gap-8">
                  {/* Enhanced Timeline indicator */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full border-4 border-black"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: item.color }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>

                    {/* Connecting line to next phase */}
                    {index < timeline.length - 1 && (
                      <motion.div
                        className="absolute top-6 left-1/2 w-px h-24 -translate-x-1/2"
                        style={{
                          background: `linear-gradient(180deg, ${item.color}60, ${timeline[index + 1].color}60)`,
                        }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15 + 0.3,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </div>

                  {/* Enhanced Content card */}
                  <motion.div
                    className="flex-1 pb-20 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="p-6 md:p-8 rounded-2xl border transition-all duration-500 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm"
                      style={{
                        borderColor: `${item.color}30`,
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-medium text-white">
                          {item.phase}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Calendar
                            className="w-4 h-4"
                            style={{ color: item.color }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: item.color }}
                          >
                            {item.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {item.activities.map((activity, actIndex) => (
                          <motion.span
                            key={actIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.15 + actIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 rounded-full text-sm font-medium border"
                            style={{
                              backgroundColor: `${item.color}15`,
                              borderColor: `${item.color}30`,
                              color: item.color,
                            }}
                          >
                            {activity}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
