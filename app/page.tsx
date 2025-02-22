"use client";

import { Button } from "@/components/ui/button";
import { HeadphonesIcon, Sparkles, Bot, BarChart3Icon, Shield, Zap, Users, Globe, Cpu, MessageSquare, ChartBar, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [solutionsRef, solutionsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen">
      <nav className="border-b border-white/10 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <HeadphonesIcon className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-xl font-bold text-white">CareTalk</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="ghost" className="text-gray-200 hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={stagger}
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 leading-tight"
            >
              Customer Support
              <br />
              Reimagined with AI
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Transform your customer service with AI-powered conversations that feel human. 
              Faster responses, smarter solutions, happier customers.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex justify-center space-x-4"
            >
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/50">
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={stagger}
          className="py-20 bg-gradient-to-r from-cyan-950/30 via-slate-950/30 to-purple-950/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "93%", label: "Customer Satisfaction" },
                { number: "24/7", label: "AI Support Available" },
                { number: "60%", label: "Cost Reduction" },
                { number: "5min", label: "Average Response Time" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          ref={featuresRef}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={stagger}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center text-white mb-12"
            >
              Future of Customer Support
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bot className="h-8 w-8" />,
                  title: "AI-Powered Support",
                  description: "24/7 intelligent responses powered by advanced machine learning"
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Lightning Fast",
                  description: "Instant responses and real-time conversation handling"
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security with 99.9% uptime guarantee"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-slate-900 border border-cyan-900/30 hover:border-cyan-700/30 transition-all group"
                >
                  <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Solutions Section */}
        <motion.section
          ref={solutionsRef}
          initial="hidden"
          animate={solutionsInView ? "visible" : "hidden"}
          variants={stagger}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-950/30 via-slate-950/30 to-purple-950/30"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Solutions for Every Industry</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Tailored AI support solutions that adapt to your industry&apos;s unique challenges and requirements.</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <Globe className="h-6 w-6" />, title: "E-commerce" },
                { icon: <Cpu className="h-6 w-6" />, title: "Technology" },
                { icon: <Users className="h-6 w-6" />, title: "Healthcare" },
                { icon: <ChartBar className="h-6 w-6" />, title: "Finance" }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-6 text-center rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-700/30 transition-all"
                >
                  <div className="text-cyan-500 mb-3 inline-block">{industry.icon}</div>
                  <h3 className="text-white font-semibold">{industry.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          ref={processRef}
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={stagger}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Get started with CareTalk in three simple steps</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Quick Integration",
                  description: "Connect CareTalk to your existing systems in minutes"
                },
                {
                  step: "02",
                  title: "AI Training",
                  description: "Our AI learns your business and support patterns"
                },
                {
                  step: "03",
                  title: "Go Live",
                  description: "Start delivering exceptional customer support"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="relative p-6 rounded-lg bg-gradient-to-br from-gray-900 to-slate-900 border border-cyan-900/30"
                >
                  <div className="text-5xl font-bold text-cyan-500/20 absolute top-4 right-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-950/30 via-slate-950/30 to-purple-950/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "CareTalk has revolutionized how we handle customer support. Response times are down 70%.",
                  author: "Sarah Johnson",
                  role: "Head of Support, TechCorp"
                },
                {
                  quote: "The AI-powered insights have helped us improve customer satisfaction significantly.",
                  author: "Michael Chen",
                  role: "CEO, InnovateX"
                },
                {
                  quote: "Implementation was seamless, and the results were immediate. Highly recommended.",
                  author: "Emily Rodriguez",
                  role: "CTO, GlobalTech"
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-6 rounded-lg bg-gray-900/50 border border-gray-800">
                  <p className="text-gray-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="text-gray-400">
                    <p className="font-semibold text-cyan-400">{testimonial.author}</p>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2>
            <p className="text-gray-400 mb-8">Join thousands of companies already using CareTalk to deliver exceptional customer service.</p>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <HeadphonesIcon className="h-6 w-6 text-cyan-500" />
                <span className="ml-2 text-lg font-bold text-white">CareTalk</span>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                Next-generation AI-powered customer support platform
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Case Studies", "Documentation"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "GDPR"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}