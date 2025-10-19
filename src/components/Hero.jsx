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
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Generate soft, glowing particles connected by lines
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.4 + 0.2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      grad.addColorStop(0, "#0b0c10")
      grad.addColorStop(1, "#12121a")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      }

      requestAnimationFrame(animate)
    }

    animate()
    return () => window.removeEventListener("resize", resize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
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

      <div className="relative z-10 px-6 text-center space-y-6">
        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-light font-serif italic tracking-wide text-gray-300"
        >
          I am a
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight font-montserrat"
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
          className="text-base md:text-lg text-gray-400 max-w-xl mx-auto"
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
