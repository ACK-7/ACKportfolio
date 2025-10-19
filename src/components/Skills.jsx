"use client"
import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Smartphone, Layers } from "lucide-react"
import Card from "./ui/Card"

const skillCategories = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Frontend",
    skills: [
      { name: "React", level: 50 },
      { name: "JavaScript", level: 50 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Framer Motion", level: 50 },
    ],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend",
    skills: [
      { name: "Laravel", level: 65 },
      { name: "Python", level: 50 },
      { name: "Django", level: 50 },
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database",
    skills: [
      { name: "MongoDB", level: 50 },
      { name: "PostgreSQL", level: 50 },
      { name: "MySQL", level: 70 },
      { name: "SQLite", level: 60 },
    ],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 50 },
      { name: "TypeScript", level: 50 },
      { name: "Python", level: 50 },
      { name: "HTML/CSS", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Other",
    skills: [
      { name: "Git/GitHub", level: 70 },
      { name: "Docker", level: 60 },
      { name: "CI/CD", level: 50 },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills and proficiency levels.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-[#1a2747] border-gray-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.1 * index,
                              ease: "easeOut",
                            }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
