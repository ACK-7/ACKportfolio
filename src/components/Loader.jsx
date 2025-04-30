"use client"
import { motion } from "framer-motion"

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a] z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-4xl font-bold gradient-text">Portfolio</span>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-48 mx-auto"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-gray-400"
        >
          Loading amazing content...
        </motion.p>
      </div>
    </div>
  )
}

export default Loader
