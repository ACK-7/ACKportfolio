import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrowserRouter as Router } from "react-router-dom"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <main className="bg-black text-white min-h-screen">
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Router>
  )
}

export default App
