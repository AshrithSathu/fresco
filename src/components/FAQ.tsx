'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much does Fresco cost?',
      answer: 'Fresco uses a per-site pricing structure, so you only pay for what you use. Each site carries a base fee that includes 2 users. If more people want to use Fresco, great! We can add more users to the site for a smaller, additional fee.\n\nGet in touch for your custom quote!',
    },
    {
      question: 'Who should use Fresco?',
      answer: 'We built Fresco with superintendents in mind. Supes create most of the documentation on site, and fill out specific punch lists and create specific reports. We want to make that workflow as easy as possible.\n\nStill, people who see supes using Fresco have been asking for it, as well! We\'ve seen great results from project managers, and we\'re even seeing use among architects.\n\nIf you\'re wondering whether Fresco is right for you, get in touch!',
    },
    {
      question: 'How does Fresco control for noise?',
      answer: 'Construction sites are loud! Luckily, your phone\'s manufacturer has done the hard work of minimizing background noise during recording.\n\nDozens of supes are using Fresco, and they find it works well even in the presence of a noisy jackhammer.\n\nStill, for best results, we recommend holding your phone close to your face and speaking in a loud and clear voice.',
    },
    {
      question: 'How does Fresco work without wi-fi/data?',
      answer: 'Fresco analyzes your videos on our secure cloud servers. We\'ve optimized our upload as much as possible, so it should work even when you have really low signal.\n\nIf you really have no signal, no worries! Fresco caches videos locally until you\'re connected to signal again.\n\nWhen we detect you have signal, Fresco will automatically upload and process the video.',
    },
    {
      question: 'What are your data security practices?',
      answer: 'We take privacy and security seriously. We abide by the highest standard, SOC2. For more information, please see the links in our footer.',
    },
    {
      question: 'I use Procore/ACC. Can I still use Fresco?',
      answer: 'Absolutely! Most of our users also use Procore or ACC. We have easy, one-click integrations with both of them.\n\nWhen you\'re done taking your notes in Fresco, simply hit the Share button, and your notes will appear perfectly in Procore or ACC.\n\nFresco is especially useful on sites where you\'re using multiple construction management softwares. If you\'re on a job that requires both Procore and ACC, Fresco saves you lots of time. Instead of double entering notes into each platform, just take your notes in Fresco and easily transfer to both.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-900 dark:text-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 whitespace-pre-wrap">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}