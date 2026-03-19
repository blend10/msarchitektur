import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

interface MethodologyHeroProps {
  clientType: "private" | "investor";
  onClientTypeChange: (type: "private" | "investor") => void;
}

export function MethodologyHero({
  clientType,
  onClientTypeChange,
}: MethodologyHeroProps) {
  return (
    <div className="bg-transparent">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-50 pb-20 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-[70px] font-light tracking-tight text-white mb-10 md:mb-20 leading-tight md:leading-none">
            Projekte, die planbar bleiben
            <span className="block md:inline">
              {" "} von <br className="hidden md:block" /> der Analyse bis zur Übergabe
            </span>
          </h1>

          {/* Enhanced Toggle Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0"
          >
            <button
              onClick={() => onClientTypeChange("private")}
              className={`w-full sm:w-auto px-8 md:px-12 py-4 uppercase text-xs md:text-sm rounded-full font-medium border transition-all duration-200 tracking-widest ${
                clientType === "private"
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-white/20 hover:border-white/40"
              }`}
            >
              Private Kunden
            </button>
            <button
              onClick={() => onClientTypeChange("investor")}
              className={`w-full sm:w-auto px-8 md:px-12 py-4 uppercase text-xs md:text-sm rounded-full font-medium border transition-all duration-200 tracking-widest ${
                clientType === "investor"
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-white/20 hover:border-white/40"
              }`}
            >
              Projektentwickler
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 md:mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-xs uppercase tracking-wider">
                Prozess erkunden
              </span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
