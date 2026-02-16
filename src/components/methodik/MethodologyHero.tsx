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
      <div className="relative  z-10 max-w-6xl mx-auto px-6 pt-50 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-[70px] font-light tracking-tight text-white mb-20 leading-none">
            Projekte, die planbar bleiben <br />
            <span className="font-normal bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              von der Analyse bis zur Übergabe
            </span>
          </h1>

          {/* Enhanced Toggle Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex gap-3 p-2 bg-white/5  backdrop-blur-sm border border-white/10 relative">
              {/* Animated background slider */}
              <motion.div
                className="absolute top-2 h-[calc(100%-16px)]  bg-white"
                initial={false}
                animate={{
                  left: clientType === "private" ? "8px" : "calc(50% + 4px)",
                  width:
                    clientType === "private"
                      ? "calc(50% - 12px)"
                      : "calc(50% - 12px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              <button
                onClick={() => onClientTypeChange("private")}
                className={`relative px-10 py-4 uppercase text-sm font-medium transition-all duration-300 ${
                  clientType === "private"
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Private Kunden
              </button>
              <button
                onClick={() => onClientTypeChange("investor")}
                className={`relative px-10 py-4 uppercase text-sm font-medium transition-all duration-300 ${
                  clientType === "investor"
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                GESCHÄFTE / INVESTOREN
              </button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20"
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
