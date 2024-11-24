import { User } from 'lucide-react';

const reviews = [
  {
    quote: "I don't know what the hell I was doing before I used Fresco. This thing saves me hours every week.",
    author: "Bay Area superintendent",
    avatar: "male",
  },
  {
    quote: "It's so nice not having to punch out 30 pages a day on a single project.",
    author: "New York City superintendent",
    avatar: "female",
  },
  {
    quote: "The time I save with Fresco is time I can spend walking the site and talking to my crew.",
    author: "Nashville superintendent",
    avatar: "female",
  },
  {
    quote: "I was wasting hours double entering notes into Procore and ACC. With Fresco, it literally takes 1 minute.",
    author: "Minneapolis superintendent",
    avatar: "female",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          What superintendents are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{review.quote}"</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
