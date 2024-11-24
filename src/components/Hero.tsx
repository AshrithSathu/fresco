'use client';

import { ArrowRight, Video, ClipboardCheck, Zap, FileText, Share2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 section-padding overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10" />

      <div className="max-w-7xl mx-auto container-padding">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12 lg:mb-0"
          >
            {/* Decorative blur effect */}
            <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />
            <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="heading-1 mb-6 dark:text-white"
              >
                Site walk notes in{" "}
                <span className="gradient-text">minutes</span>, not hours.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              >
                So superintendents can focus on what really matters.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card p-6 mb-8 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
              >
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                  Fresco turns your phone into your new notebook
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Built for superintendents. Fresco is designed to minimize note
                  taking time, maximizing the time superintendents can spend
                  keeping projects on time and under budget.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="button-primary flex items-center justify-center group">
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="button-secondary flex items-center justify-center group">
                  Watch Demo
                  <Video className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="ml-3 text-sm font-medium dark:text-gray-300">
                    Custom templates
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <ClipboardCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="ml-3 text-sm font-medium dark:text-gray-300">
                    Dead simple UX
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Share2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="ml-3 text-sm font-medium dark:text-gray-300">
                    One-click share
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2070"
                alt="Construction site management"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-gray-900/0 dark:from-gray-900/60 dark:to-gray-900/20" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-2xl -z-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
