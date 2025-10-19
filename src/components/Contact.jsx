"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Button from "./ui/Button"
import Card from "./ui/Card"
import Input from "./ui/Input"
import Textarea from "./ui/Textarea"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
            contact form below.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-8xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="bg-[#1a2747] border-gray-700">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Email</h3>
                    <p className="text-gray-300 text-base">asiimac3@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">Send me an email anytime!</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1a2747] border-gray-700">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Location</h3>
                    <p className="text-gray-300 text-base">Kawuku, Entebbe Uganda</p>
                    <p className="text-gray-400 text-sm mt-1">Available for remote work</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1a2747] border-gray-700">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Phone</h3>
                    <p className="text-gray-300 text-base">+256 (779) 901-499</p>
                    <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9am-5pm EAT</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-[#1a2747] border-gray-700">
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-base font-medium text-gray-200">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-[#131f3d] border-gray-700 focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-medium text-gray-200">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-[#131f3d] border-gray-700 focus:border-blue-500 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-base font-medium text-gray-200">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-[#131f3d] border-gray-700 focus:border-blue-500 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-base font-medium text-gray-200">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      rows={5}
                      required
                      className="bg-[#131f3d] border-gray-700 focus:border-blue-500 text-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
