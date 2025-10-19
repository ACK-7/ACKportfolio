import { Github, Linkedin, Mail, Twitter } from "lucide-react"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1022] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Asiima Crisen
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating innovative web solutions with modern technologies and clean, efficient code.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/ACK-7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/asiima-crisen-72668b172/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/crisack77"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; {currentYear} Asiima Crisen. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
