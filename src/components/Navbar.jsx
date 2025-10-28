"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { HashLink as Link } from "react-router-hash-link"
import Button from "./ui/Button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""))

    // Create a map to store all sections and their positions
    const sectionPositions = new Map()

    // Function to update active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Find the section that is currently in view
      let currentSection = "home"

      // Convert the Map to an array, sort by position, and find the active section
      const sortedSections = Array.from(sectionPositions.entries()).sort((a, b) => a[1] - b[1])

      for (const [section, position] of sortedSections) {
        if (scrollPosition >= position) {
          currentSection = section
        }
      }

      setActiveSection(currentSection)
    }

    // Calculate initial positions
    const calculatePositions = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const position = element.offsetTop
          sectionPositions.set(section, position)
        }
      })

      // Initial check for active section
      handleScroll()
    }

    // Calculate positions after a short delay to ensure all elements are rendered
    setTimeout(calculatePositions, 100)

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Recalculate on resize
    window.addEventListener("resize", calculatePositions)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", calculatePositions)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f172a]/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link smooth to="#home" className="text-lg sm:text-xl md:text-2xl gradient-text border py-2 px-4 sm:px-6 rounded-full">
          Asiima Crisen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-base lg:text-lg">
          {navItems.map((item) => (
            <Link
              smooth
              key={item.name}
              to={item.href}
              className={`text-gray-300 hover:text-white transition-colors relative group ${
                activeSection === item.href.replace("#", "") ? "text-white" : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
          <Button className="bg-white text-black text-sm lg:text-base px-4 py-2">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  smooth
                  key={item.name}
                  to={item.href}
                  className={`py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white font-medium bg-blue-500/20 border-l-4 border-blue-500"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-white text-black w-full mt-4 py-3">
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
