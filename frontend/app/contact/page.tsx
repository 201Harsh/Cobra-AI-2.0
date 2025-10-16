"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Link from "next/link";
import AxiosInstance from "@/config/Axios";
import { Flip, toast, Zoom } from "react-toastify";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
    priority: "medium",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Support",
      description: "Get detailed assistance via email",
      contact: "endgamingai2@gmail.com",
      responseTime: "Within 24 hours",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      description: "Quick chat support",
      contact: "+9411378054",
      responseTime: "Within 2 hours",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaDiscord className="text-2xl" />,
      title: "Discord Community",
      description: "Join our developer community",
      contact: "not yet",
      responseTime: "Real-time",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      title: "Twitter",
      description: "Quick updates and support",
      contact: "no yet",
      responseTime: "Within 4 hours",
      color: "from-blue-400 to-blue-600",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with Cobra AI 2.0?",
      answer:
        "Simply register for an account, verify your email, and choose between Beginner or Coder mode based on your experience level.",
    },
    {
      question: "What's the difference between Beginner and Coder mode?",
      answer:
        "Beginner mode uses AI templates for instant website creation without coding. Coder mode provides collaborative coding environment with AI assistance for developers.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a free Starter plan with 5 AI-generated websites and basic features. No credit card required.",
    },
    {
      question: "How does the AI coding assistant work?",
      answer:
        "Our AI analyzes your code in real-time, provides suggestions, detects errors, and can even write code snippets based on your requirements.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await AxiosInstance.post(
        "/users/contact/admin",
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        toast.success(
          response.data?.message ||
            "Message sent successfully! We'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
          }
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          category: "general",
          message: "",
          priority: "medium",
        });
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-white text-3xl" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Message Sent Successfully!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for reaching out to us. We've received your message
                and our support team will get back to you within 24 hours.
              </p>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <span>You'll receive a confirmation email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <span>Our team will review your request</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <span>We'll contact you with a solution</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Back to Home
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-emerald-500/30 hover:border-emerald-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500/10"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <FaPaperPlane className="text-emerald-400" />
              <span className="text-sm">We're Here to Help You</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="md:text-xl text-lg text-gray-300 mb-8 leading-relaxed">
              Have questions about Cobra AI 2.0? Need technical support? Our
              team is here to help you succeed with our platform. Reach out to
              us through any of the channels below.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-emerald-400 font-semibold mb-2">
                  {method.contact}
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <FaClock className="text-xs" />
                  <span>{method.responseTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white mt-1 flex-shrink-0">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-400">
                        gamerpandeyharsh@gmail.com
                      </p>
                      <p className="text-gray-400">endgamingai2@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white mt-1 flex-shrink-0">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-400">+9411378054</p>
                      <p className="text-gray-400">Mon - Fri, 9AM - 6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white mt-1 flex-shrink-0">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-400">Tallital, Nainital</p>
                      <p className="text-gray-400">Uttrakhand India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <FaTwitter className="text-blue-400" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <FaLinkedin className="text-blue-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <FaDiscord className="text-purple-500" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <FaWhatsapp className="text-green-500" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
                  <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Category *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          required
                        >
                          <option value="general">General Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="billing">Billing & Payments</option>
                          <option value="feature">Feature Request</option>
                          <option value="bug">Bug Report</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Priority *
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          required
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Brief subject of your message"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Please describe your issue or inquiry in detail..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400">
                Still have questions?{" "}
                <Link
                  href="/docs"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Check our documentation
                </Link>{" "}
                or{" "}
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  contact us above
                </button>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactSupport;
