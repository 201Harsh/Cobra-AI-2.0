import React from "react";
import {
  FaCode,
  FaUsers,
  FaRobot,
  FaRocket,
  FaLightbulb,
  FaGithub,
  FaArrowRight,
  FaPlay,
  FaShieldAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiExpress,
} from "react-icons/si";

const page = () => {
  const features = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Real-Time Collaboration",
      description:
        "Group chats & private rooms with real-time messaging. Users can trigger AI actions by typing @AI. Collaborative coding using Monaco editor + Yjs, supporting multiple users editing at once. File upload & AI-assisted editing with fully processed file returns.",
      highlights: [
        "Real-time messaging",
        "@AI command triggers",
        "Multi-user editing",
        "File upload & processing",
        "AI-assisted editing",
      ],
    },
    {
      icon: <FaRobot className="text-2xl" />,
      title: "AI Coding Assistance",
      description:
        "Full-stack project creation (MERN, Node.js, React) from scratch. Instant code preview using WebContainers. Automatic error detection & AI fixes with AI-driven templates for any stack.",
      highlights: [
        "Full-stack project creation",
        "Instant preview",
        "Error detection & fixes",
        "Smart templates",
      ],
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Agentic AI Tools",
      description:
        "AI acts as a programmable agent capable of running code, debugging automatically, updating templates, and performing repeated tasks via MCP server integration.",
      highlights: [
        "Programmable AI agent",
        "Auto-debugging",
        "Template updates",
        "MCP server integration",
      ],
    },
    {
      icon: <FaPlay className="text-2xl" />,
      title: "Smart Code Processing",
      description:
        "Advanced code chunking for handling larger files within free-tier token limits. AI reads, analyzes, and returns fully processed files with optimized code.",
      highlights: [
        "Code chunking",
        "Token optimization",
        "File processing",
        "Optimized outputs",
      ],
    },
  ];

  const languages = [
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiExpress />, name: "Express.js" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-bg-gray-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
              <FaCode className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Cobra AI 2.0
            </span>
          </div>

          <div className="hidden md:flex space-x-6">
            <button className="hover:text-emerald-400 transition-colors">
              Features
            </button>
            <button className="hover:text-emerald-400 transition-colors">
              Templates
            </button>
            <button className="hover:text-emerald-400 transition-colors">
              Documentation
            </button>
          </div>

          <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
            <FaLightbulb className="text-emerald-400" />
            <span className="text-sm">
              Revolutionary AI-Powered Coding Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Better with{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Cobra AI 2.0
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cobra AI 2.0 is the next-generation AI-agentic coding platform that
            revolutionizes how developers code, collaborate, and deploy
            full-stack projects with intelligent real-time AI assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <span>Launch Cobra AI 2.0</span>
              <FaArrowRight />
            </button>
            <button className="border border-emerald-500/30 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
              <FaGithub />
              <span>View on GitHub</span>
            </button>
          </div>

          {/* Supported Languages */}
          <div className="mb-16">
            <p className="text-gray-400 mb-4">
              Supported Languages & Frameworks
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="text-emerald-400 text-xl">{lang.icon}</span>
                  <span className="font-medium">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of collaborative coding with AI-powered tools
            designed to supercharge your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-emerald-500/30 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-emerald-300"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet the Creator</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The visionary behind Cobra AI 2.0 - Revolutionizing developer tools
            with AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Developer Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  HP
                </div>
              </div>

              {/* Developer Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Harsh Pandey</h3>
                <p className="text-xl text-emerald-400 mb-4">
                  Creator & Lead Developer
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Passionate developer and AI enthusiast dedicated to creating
                  tools that empower developers worldwide. Cobra AI 2.0
                  represents the culmination of years of experience in
                  full-stack development and artificial intelligence.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://github.com/201Harsh"
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub className="text-white text-lg" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/harsh-pandey"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaLinkedin className="text-white text-lg" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/harsh_pandey"
                    className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaInstagram className="text-white text-lg" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built with Modern Tech</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to deliver the best developer
            experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: "React & Next.js", desc: "Frontend Framework" },
            { name: "Node.js & Express", desc: "Backend Runtime" },
            { name: "WebSocket", desc: "Real-time Communication" },
            { name: "AI/ML Integration", desc: "Advanced AI Models" },
            { name: "Monaco Editor", desc: "Code Editing" },
            { name: "Yjs CRDT", desc: "Collaborative Editing" },
            { name: "WebContainers", desc: "Code Execution" },
            { name: "MCP Servers", desc: "AI Agent Tools" },
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/30 transition-all duration-300 text-center"
            >
              <h4 className="font-bold text-lg mb-2">{tech.name}</h4>
              <p className="text-gray-400 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Revolutionize Your Coding Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the future of development with Cobra AI 2.0 - where AI meets
            collaborative coding
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto hover:scale-105">
            <FaRocket />
            <span>Start with Cobra AI 2.0</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded flex items-center justify-center">
              <FaCode className="text-white text-xs" />
            </div>
            <span className="font-bold">Cobra AI 2.0</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cobra AI 2.0. Built with ❤️ by{" "}
            <a
              href="https://github.com/201Harsh"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Harsh Pandey
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
