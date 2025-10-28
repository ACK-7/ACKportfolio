import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

// ----------------------
// Modern Background Animation
// ----------------------
function ModernBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")

    const resize = () => {
      // Get the actual viewport dimensions
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      // Set the actual size in memory (scaled to account for extra pixel density)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      
      // Scale the drawing context so everything draws at the correct size
      ctx.scale(dpr, dpr)
      
      // Set the size in CSS pixels
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }
    
    resize()
    window.addEventListener("resize", resize)

    // Generate soft, glowing particles connected by lines
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.4 + 0.2,
    }))

    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      ctx.clearRect(0, 0, width, height)

      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, width, height)
      grad.addColorStop(0, "#0b0c10")
      grad.addColorStop(1, "#12121a")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${(120 - dist) / 120 * 0.15})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        // Bounce off edges
        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1
      }

      requestAnimationFrame(animate)
    }

    animate()
    return () => window.removeEventListener("resize", resize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" style={{ display: 'block' }} />
}

// ----------------------
// Hero Section
// ----------------------
function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      {mounted && <ModernBackground />}

      <div className="relative z-10 px-4 sm:px-6 text-center space-y-4 sm:space-y-6 max-w-6xl mx-auto">
        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-light font-serif italic tracking-wide text-gray-300"
        >
          I am a
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight font-montserrat"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Scalable Backend
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            & Software Engineer
          </span>
        </motion.h1>

        {/* Small Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto px-4"
        >
          Building efficient, reliable, and future-ready systems that scale with innovation.
        </motion.p>

        {/* Call-to-action */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-flex items-center gap-2 text-white border border-gray-500 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
        >
          View My Work
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
