import React from "react";
import {
  FaCode,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaGlobe,
  FaShieldAlt,
  FaMobile,
  FaSync,
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaCheck,
  FaMagic,
  FaRobot,
} from "react-icons/fa";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Harsh Pandey",
      role: "Founder & Lead Developer",
      description:
        "Full-stack MERN developer and AI enthusiast with +1.5 years of experience in web development, real-time applications, and machine learning.",
      image: "/api/placeholder/150/150",
      social: {
        github: "https://github.com/201Harsh",
        linkedin: "https://www.linkedin.com/in/201harsh/",
        instagram: "https://www.instagram.com/201harshs/",
      },
    },
    // Add more team members as needed
  ];

  const milestones = [
    {
      year: "2024",
      title: "Cobra AI 2.0 Launch",
      description:
        "Complete platform redesign with dual-mode architecture and advanced AI capabilities",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated MCP servers and advanced AI agent functionality",
    },
    {
      year: "2022",
      title: "WebContainers Adoption",
      description:
        "Implemented browser-based code execution for instant preview",
    },
    {
      year: "2021",
      title: "Project Inception",
      description: "Initial concept and prototype development",
    },
  ];

  const technologies = [
    {
      category: "Frontend",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WebSocket"],
    },
    {
      category: "Backend",
      stack: ["Node.js", "Express", "WebRTC", "Redis", "PostgreSQL"],
    },
    {
      category: "AI & ML",
      stack: ["Gemini API", "MCP Servers", "OpenAI", "Custom AI Models"],
    },
    {
      category: "Infrastructure",
      stack: ["Docker", "AWS", "Vercel", "WebContainers", "CDN"],
    },
    {
      category: "Collaboration",
      stack: ["Yjs CRDT", "Monaco Editor", "Liveblocks", "Socket.io"],
    },
    {
      category: "Deployment",
      stack: ["Vercel", "Netlify", "GitHub Pages", "Custom CLI"],
    },
  ];

  const values = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Accessibility First",
      description:
        "Making web development accessible to everyone, regardless of technical background",
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovation Driven",
      description:
        "Constantly pushing boundaries with cutting-edge AI and web technologies",
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "User Centric",
      description:
        "Every feature is designed with user experience as the top priority",
    },
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Global Impact",
      description:
        "Empowering creators worldwide to build amazing digital experiences",
    },
  ];

  const stats = [
    { number: "10K+", label: "Websites Created" },
    { number: "5K+", label: "Active Developers" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Reliability" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <FaLightbulb className="text-emerald-400" />
              <span className="text-sm">The Story Behind Cobra AI 2.0</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Web Creation
              </span>
            </h1>

            <p className="md:text-xl text-lg text-gray-300 mb-8 leading-relaxed">
              <span className="font-bold text-emerald-400">Cobra AI 2.0</span>{" "}
              is more than just a platform—it's a vision to democratize web
              development and empower everyone to create amazing digital
              experiences, with or without coding skills.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-8 hover:border-emerald-400/40 transition">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-emerald-400">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To redefine how the world creates on the web — by fusing
                  artificial intelligence with human imagination. Cobra AI
                  empowers both coders and creators to design, develop, and
                  deploy stunning digital experiences effortlessly. Our mission
                  is to make innovation accessible to everyone, from dreamers
                  with no code skills to developers building the next generation
                  of the web.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-green-600/20 p-8 hover:border-green-400/40 transition">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-700 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                  <FaGlobe className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-emerald-400">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To build a future where AI and creativity move as one —
                  crafting experiences that are intelligent, beautiful, and
                  human-centered. Cobra AI envisions a digital world where ideas
                  become products in minutes, collaboration feels effortless,
                  and technology becomes invisible — leaving only pure creation
                  behind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem & Solution */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Why We Built{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  {" "}
                  Cobra AI 2.0
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Addressing the fundamental challenges in modern web development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* The Problem */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-red-400 mb-6">
                  The Problem
                </h3>
                {[
                  "High technical barrier for non-coders to create professional websites",
                  "Traditional website builders are limited and lack customization",
                  "Development tools are too complex for beginners but too simple for experts",
                  "Collaboration in development teams is often fragmented and inefficient",
                  "Deployment and maintenance require significant technical expertise",
                ].map((problem, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <p className="text-gray-300">{problem}</p>
                  </div>
                ))}
              </div>

              {/* Our Solution */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">
                  Our Solution
                </h3>
                {[
                  "Dual-mode platform serving both beginners and experienced developers",
                  "AI-powered template engine that adapts to user requirements",
                  "Real-time collaborative coding environment with AI assistance",
                  "Browser-based execution and instant deployment",
                  "Unified workspace that grows with user skills",
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p className="text-gray-300">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Technology */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies to deliver the best user
              experience
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">
                    {tech.category}
                  </h3>
                  <div className="space-y-2">
                    {tech.stack.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Highlight */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes Us Different</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaMagic className="text-2xl" />,
                  title: "Dual-Mode Platform",
                  description:
                    "Serving both complete beginners and professional developers in one unified platform",
                },
                {
                  icon: <FaRobot className="text-2xl" />,
                  title: "AI-First Approach",
                  description:
                    "Advanced AI capabilities integrated throughout the entire development workflow",
                },
                {
                  icon: <FaSync className="text-2xl" />,
                  title: "Real-time Collaboration",
                  description:
                    "Multiple users can work together seamlessly with live synchronization",
                },
                {
                  icon: <FaCloud className="text-2xl" />,
                  title: "Instant Deployment",
                  description:
                    "From idea to live website in minutes with one-click deployment",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-emerald-400">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The passionate individuals behind Cobra AI 2.0
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-52 h-52  rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                      <img
                        src="/img/dev1.jpg"
                        alt="dev"
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                    <p className="text-xl text-emerald-400 mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <a
                        target="_blank"
                        href={member.social.github}
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="text-white text-lg" />
                        <span className="font-medium">GitHub</span>
                      </a>
                      <a
                        target="_blank"
                        href={member.social.linkedin}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <FaLinkedin className="text-white text-lg" />
                        <span className="font-medium">LinkedIn</span>
                      </a>
                      <a
                        target="_blank"
                        href={member.social.instagram}
                        className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <FaInstagram className="text-white text-lg" />
                        <span className="font-medium">Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to revolutionary platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the revolution in web development and AI-powered
              creation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <FaRocket />
                <span>Start Building Today</span>
              </Link>
              <Link
                href="/contact"
                className="cursor-pointer border border-emerald-500/30 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
