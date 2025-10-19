"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Button from "./ui/Button"

const projects = [
  {
    id: 1,
    title: "School website",
    description:
      "A school website built with React and Tailwind CSS, featuring a responsive design and interactive elements.",
    image: "https://via.placeholder.com/800x600",
    tags: ["React", "tailwindcss", "PHP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Laundry website",
    description: "A laundry website built with React and tailwindcss, featuring a user-friendly interface and real-time updates.",
    image: "https://via.placeholder.com/800x600",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "frontend",
  },
  {
    id: 3,
    title: "A portfolio website",
    description: "An architect's portfolio website built with React and tailwindcss, featuring a clean design and interactive elements.",
    image: "https://via.placeholder.com/800x600",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "frontend",
  },
  {
    id: 4,
    title: "An inventory and sales management system",
    description: "A system for managing inventory and sales for a small business, built with React and tailwindcss.",
    image: "https://via.placeholder.com/800x600",
    tags: ["Tailwind CSS", "React", "Laravel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "fullstack",
  },
  
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Fullstack" },
]

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills
            and passion for building exceptional web applications.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "border-gray-700 hover:bg-gray-800 text-white"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a2747] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-900/30 text-blue-400 py-1 px-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
