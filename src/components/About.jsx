"use client"
import { motion } from "framer-motion"
import Button from "./ui/Button"
import { Download } from "lucide-react"

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
    <section id="about" className="py-20 bg-[#0a1022]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} custom={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} custom={1} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl gradient-border"></div>
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    src="https://via.placeholder.com/500"
                    alt="Developer Portrait"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-500 rounded-lg p-4 shadow-lg">
                  <p className="text-lg font-bold">5+ Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} custom={2}>
              <h3 className="text-2xl font-bold mb-4">Fullstack Developer & UI/UX Enthusiast</h3>
              <p className="text-gray-300 mb-6">
                Hello! I'm a passionate fullstack developer with expertise in building modern web applications. With a
                strong foundation in both frontend and backend technologies, I create seamless digital experiences that
                solve real-world problems.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in web development began 5 years ago, and since then, I've worked on a variety of projects
                ranging from e-commerce platforms to complex enterprise applications. I'm constantly learning and
                adapting to new technologies to stay at the forefront of web development.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Name:</h4>
                  <p className="text-gray-300">John Doe</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-gray-300">john@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Availability:</h4>
                  <p className="text-gray-300">Open to opportunities</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
