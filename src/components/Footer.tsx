import { Construction } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Construction className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold">Fresco AI</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              Transforming construction site documentation with AI-powered video analysis.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#why-fresco" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                  Why Fresco
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 dark:text-gray-300">Email: contact@fresco-ai.com</li>
              <li className="text-gray-400 dark:text-gray-300">Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Fresco AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}