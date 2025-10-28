"use client"
import { motion } from "framer-motion"
import Button from "./ui/Button"
import { Download } from "lucide-react"
import cris from "/cris.jpeg"

function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-20">
      <div className="w-[90%] mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn} custom={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center text-lg sm:text-xl md:text-2xl">
            <motion.div variants={fadeIn} custom={1} className="relative order-1">
              <div className="relative w-full max-w-sm md:max-w-md mx-auto">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={cris}
                    alt="Developer Portrait"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} custom={2} className="order-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Software Engineer & UI/UX Enthusiast</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
                Hello! I'm a passionate software engineer with expertise in building modern web applications. With a
                strong foundation in both frontend and backend technologies, I create seamless digital experiences that
                solve real-world problems.
              </p>
              <p className="text-gray-300 mb-6 text-base sm:text-lg">
                My web development career is built on a diverse background of delivering high-scale solutions and intricate,
                 mission-critical systems. I prioritize continuous learning and quickly adapt to emerging technologies to 
                 remain at the leading edge of development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm sm:text-base md:text-lg">
                <div>
                  <h4 className="font-semibold mb-2">Name:</h4>
                  <p className="text-gray-300 break-words">Asiima Crisen</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-gray-300 break-words">asiimac3@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="text-gray-300">Kawuku, Entebbe</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Availability:</h4>
                  <p className="text-gray-300">Open to opportunities</p>
                </div>
              </div>

              {/* <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
