import { Clock, TrendingUp, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function WhyFresco() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save hours every day',
      description: 'Turn a 2-hour documentation task into a 5-minute video.',
    },
    {
      icon: TrendingUp,
      title: 'Better documentation',
      description: 'Capture more details with video than you ever could with photos.',
    },
    {
      icon: Sparkles,
      title: 'Instant sharing',
      description: 'Notes sync automatically to Procore and ACC.',
    },
  ];

  return (
    <section id="why-fresco" className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why superintendents love Fresco
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
                alt="Construction site management"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-gray-900/0 dark:from-gray-900/40 dark:to-gray-900/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}