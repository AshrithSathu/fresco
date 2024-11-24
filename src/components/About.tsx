import { ClipboardList, Video, FileText, Workflow } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Video,
      title: 'Record your walk',
      description: 'Just record a video on your phone while walking the site.',
    },
    {
      icon: FileText,
      title: 'AI writes your notes',
      description: 'Fresco AI turns your video into detailed notes, punch lists, and progress reports.',
    },
    {
      icon: ClipboardList,
      title: 'Share with your team',
      description: 'Notes sync to Procore and ACC in seconds.',
    },
    {
      icon: Workflow,
      title: 'Stay on schedule',
      description: 'Spend less time writing notes, more time managing your project.',
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How it works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fresco is designed to minimize note taking time, maximizing the time superintendents can spend keeping projects on time and under budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}