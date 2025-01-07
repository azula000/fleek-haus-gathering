import { Twitter, Github, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">About Fleek</h3>
            <p className="text-gray-400 mb-4">
              Empowering developers and businesses to build and deploy applications
              on the autonomous internet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Fleek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};