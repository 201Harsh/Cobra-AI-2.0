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
  FaMagic,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiExpress,
} from "react-icons/si";
import Header from "./Header";
import Link from "next/link";
import Footer from "./Footer";
import Image from "next/image";

const Welcome = () => {
  const features = [
    {
      icon: <FaMagic className="text-2xl" />,
      title: "Creator Mode - No Code Required",
      description:
        "Instantly generate stunning, ready-made websites from templates. AI handles text, branding, and images. Perfect for non-coders who want professional websites in minutes.",
      highlights: [
        "AI-powered template customization",
        "Automatic branding & image integration",
        "Live preview with WebContainers",
        "One-click deployment",
        "Download ready-to-use code",
      ],
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Dev Mode - AI Collaboration",
      description:
        "Collaborate with AI as your coding mentor. Real-time group chats, multi-user editing, and full-stack project execution in browser with AI-powered assistance.",
      highlights: [
        "AI coding mentor & teammate",
        "Real-time collaborative editing",
        "@AI command triggers",
        "Live code execution",
        "Automatic error detection",
      ],
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Dual User Journey",
      description:
        "Seamless experience for both beginners and advanced developers. Choose your path and let AI adapt to your skill level and requirements.",
      highlights: [
        "Beginner: Template → Brand → Website",
        "Coder: Chat → Code → Collaborate → Deploy",
        "AI adapts to user skill level",
        "Progressive complexity",
        "Unified platform experience",
      ],
    },
    {
      icon: <FaRobot className="text-2xl" />,
      title: "AI Mentor & Agent Platform",
      description:
        "AI acts as designer for non-coders and coding mentor for developers. MCP server integration enables advanced AI actions and real-time project management.",
      highlights: [
        "Dual AI role: Designer & Mentor",
        "MCP server integration",
        "Real-time code monitoring",
        "Automated fixes & suggestions",
        "Full-stack scaffolding",
      ],
    },
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

  const templates = [
    {
      type: "E-commerce Store",
      desc: "AI-powered online store with intelligent product management and seamless checkout experience.",
      features: [
        "Product Catalog",
        "Smart Inventory",
        "Secure Payments",
        "Order Tracking",
      ],
    },
    {
      type: "Portfolio Website",
      desc: "Showcase your work with stunning galleries and professional project presentations.",
      features: [
        "Project Gallery",
        "Client Testimonials",
        "Contact Forms",
        "Social Integration",
      ],
    },
    {
      type: "Blog Platform",
      desc: "Content-rich blog with AI writing assistance and engaging reader experiences.",
      features: [
        "SEO Optimization",
        "Comment System",
        "Newsletter",
        "Analytics Dashboard",
      ],
    },
    {
      type: "Gaming Community",
      desc: "Build engaging gaming communities with forums, leaderboards, and event calendars.",
      features: ["User Profiles", "Forums", "Achievement System", "Live Chat"],
    },
    {
      type: "Animated Portfolio",
      desc: "GSAP-powered animations and interactive elements that captivate your audience.",
      features: [
        "Smooth Animations",
        "Interactive Elements",
        "Parallax Effects",
        "Mobile Optimized",
      ],
    },
    {
      type: "SaaS Dashboard",
      desc: "Professional business dashboards with real-time analytics and data visualization.",
      features: [
        "Data Charts",
        "User Management",
        "API Integration",
        "Custom Reports",
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
    <>
      <Header />
      <div
        className="min-h-screen pt-10 bg-gray-950 
      bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white"
      >
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <FaLightbulb className="text-emerald-400" />
              <span className="text-sm">
                AI That Builds. AI That Codes. AI That Transforms
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-h1 capitalize">
              Code Collaborate Create{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                <br /> Cobra AI 2.0
              </span>
            </h1>

            <p className="md:text-xl text-lg text-gray-300 mb-8 leading-relaxed font-inter">
              Cobra AI 2.0 is the next-generation{" "}
              <span className="font-bold text-emerald-400">AI-agentic</span>{" "}
              platform that empowers both coders and non-coders to build,
              collaborate, and deploy websites and full-stack projects with
              intelligent real-time AI assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/register"
                className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <span>Launch Cobra AI 2.0</span>
                <FaArrowRight />
              </Link>
              <Link
                href={"/demo"}
                className="cursor-pointer border border-emerald-500/30 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2"
              >
                <FaPlay />
                <span>Watch Demos</span>
              </Link>
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
                    <span className="text-emerald-400 text-xl">
                      {lang.icon}
                    </span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dual Mode Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              One platform, two powerful ways to create - designed for everyone
              from complete beginners to professional developers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Beginner Mode Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaMagic className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Creator Mode</h3>
                <p className="text-emerald-400 font-semibold">For Non-Coders</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Select from beautiful templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Input your brand details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>AI customizes everything automatically</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Get live preview instantly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Download or deploy with one click</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  Perfect for: Entrepreneurs, Bloggers, Artists, Small
                  Businesses, Non-Techies
                </p>
              </div>
            </div>

            {/* Coder Mode Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaLaptopCode className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Dev Mode</h3>
                <p className="text-emerald-400 font-semibold">For Developers</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Real-time collaborative coding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>AI mentor for code suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Live browser execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Automatic error detection & fixes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Full-stack project scaffolding</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  Perfect for: Developers, Teams, Students, Tech Companies,
                  Working Professionals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Template Showcase */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full mb-4 border border-emerald-500/20">
              <FaMagic className="text-emerald-400 text-sm" />
              <span className="text-sm text-gray-300">
                AI-Powered Templates
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stunning Templates, Zero Effort
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from professionally designed templates that automatically
              adapt to your brand. AI handles the customization while you focus
              on your content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 max-w-7xl 2xl:max-w-full mx-auto">
            {templates.map((template, index) => (
              <div
                key={template.type}
                className="cursor-pointer group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-emerald-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon and Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <FaMagic className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {template.type}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mt-2 group-hover:w-16 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {template.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {template.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 border border-gray-600 hover:border-transparent text-gray-300 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg flex items-center justify-center space-x-2">
                    <span>Use Template</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 px-8 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                  <FaRocket className="text-white text-sm" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">
                    Need something custom?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Our AI can create unique designs just for you
                  </p>
                </div>
              </div>
              <Link href="/register" className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 whitespace-nowrap">
                <FaMagic className="text-sm" />
                <span>Create Custom Template</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of collaborative coding with AI-powered
              tools designed to supercharge your development workflow
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

        {/* User Journey Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple steps from idea to deployed project, powered by AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                {[
                  {
                    step: "1",
                    title: "Register & Verify",
                    desc: "Quick signup with OTP verification",
                  },
                  {
                    step: "2",
                    title: "Choose Your Mode",
                    desc: "Beginner or Coder - AI adapts to you",
                  },
                  {
                    step: "3",
                    title: "Create with AI",
                    desc: "Build websites or code with AI assistance",
                  },
                  {
                    step: "4",
                    title: "Deploy & Share",
                    desc: "One-click deployment to go live",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Creator</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The visionary behind Cobra AI 2.0 - Revolutionizing developer
              tools with AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Developer Photo */}
                <div className="flex-shrink-0">
                  <div className="w-52 h-52 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    <img
                      src="/img/dev1.jpg"
                      alt="dev"
                      className="h-full w-full object-cover rounded-full"
                    />
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
                      target="_blank"
                      href="https://github.com/201Harsh"
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <FaGithub className="text-white text-lg" />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/201harsh/"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <FaLinkedin className="text-white text-lg" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/201harshs/"
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
            <Link
              href={"/register"}
              className="lg:w-1/4 md:w-2/3 w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto hover:scale-105"
            >
              <FaRocket />
              <span>Start with Cobra AI 2.0</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Welcome;
