import { Code, Palette, Zap } from 'lucide-react';
import MyLogo from "../assets/mylogo.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a full-stack developer with 4+ years of experience building web applications 
                that users love. My journey started with curiosity about how websites work, and 
                it evolved into a passion for creating seamless digital experiences.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud technologies, and user-centered 
                designs. When I'm not coding, you'll find me exploring new technologies, creating new project, or mentoring aspiring developers.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                  <Code className="text-blue-400 w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                  <p className="text-slate-400 text-sm">Writing maintainable, scalable solutions</p>
                </div>
                
                <div className="text-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                  <Palette className="text-purple-400 w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">UI/UX Focus</h3>
                  <p className="text-slate-400 text-sm">Designing intuitive user experiences</p>
                </div>
                
                <div className="text-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                  <Zap className="text-yellow-400 w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Performance</h3>
                  <p className="text-slate-400 text-sm">Optimizing for speed and efficiency</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 absolute -inset-4 blur-2xl"></div>
                <div className="w-72 h-72 bg-slate-700 rounded-full flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={MyLogo}
                    alt="Profile"
                    className="w-64 h-64 rounded-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;