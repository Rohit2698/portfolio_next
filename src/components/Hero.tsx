import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-[100px] min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Rohit Thakur
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Frontend Web/mobile Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that blend beautiful design with powerful functionality. 
            Passionate about creating scalable web applications and intuitive user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            
            <div className="flex space-x-6">
              <a
                href="https://github.com/Rohit2698"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-slate-800"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-thakur-535769185/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-slate-800"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rohit.thakur2698.freelance@gmail.com"
                className="text-slate-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-slate-800"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-white transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;