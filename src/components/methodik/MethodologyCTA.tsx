import { motion } from "motion/react";
import { Calendar, Download, ArrowRight } from "lucide-react";

export function MethodologyCTA() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-3xl" />

        <div className="relative text-center p-12 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm overflow-hidden">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-gray-300">
                  Lass uns anfangen
                </span>
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Starten Sie Ihr Projekt
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Bereit, Ihre Vision zum Leben zu erwecken? Lassen Sie uns
              besprechen, wie die bewährte Methodik von Casa Five für Ihr
              Projekt funktionieren wird.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 rounded-full bg-white text-black font-medium text-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Beratung buchen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 rounded-full border-2 border-white/20 text-white font-medium text-lg flex items-center gap-3 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Methodik herunterladen
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500 mt-10 flex items-center justify-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Typische Antwortzeit: innerhalb von 24 Stunden
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
