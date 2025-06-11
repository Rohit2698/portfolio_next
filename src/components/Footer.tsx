import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">
                <span className="text-blue-400">Roh</span>Port
              </div>
              <p className="text-slate-400">
                Building digital experiences with passion
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-slate-400 flex items-center gap-2 justify-center md:justify-end">
                Made with <Heart className="text-red-500 fill-current" size={16} /> by Rohit Thakur
              </p>
              <p className="text-slate-500 text-sm mt-1">
                © {currentYear} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;