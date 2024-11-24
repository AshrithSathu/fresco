'use client';

import { ClipboardCheck, Share2, FileText } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Custom templates",
    description:
      "Site notes, punch lists: Fresco does it all! Simply upload a PDF, create a custom form, or use one of our many templates.",
    icon: FileText,
  },
  {
    title: "Dead simple UX",
    description:
      "Just record videos of your site walk or inspection, talking through your observations. Fresco does the rest. Yes, it's really that easy.",
    icon: ClipboardCheck,
  },
  {
    title: "One-click share",
    description:
      "Fresco creates detailed PDF reports that you can email, but that's not all. Port your notes into Procore, ACC, or Excel... with a single click.",
    icon: Share2,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="card card-hover p-6"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
