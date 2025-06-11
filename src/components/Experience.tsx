import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software engineer',
      company: 'GTx Technologies',
      location: 'Gurugram, India',
      duration: '2021 - Present',
      description: [
        'A Game application which helps multiplayer and signle player games.',
        'Mentored 2 junior developers and established coding standards',
        'Create the fitness app in react native which includes getting rewards in exercise complete',
        'Collaborated with design team to create responsive web applications',
        'Created whole application from frontend and backend using firebase'
      ],
      technologies: ['React', 'Firebase', 'Next JS', 'React native', 'Node JS']
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Work <span className="text-blue-400">Experience</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              My professional journey in software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 z-10">
                  <div className="w-full h-full bg-blue-400 rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
                  <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Briefcase size={20} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-4">{exp.location}</p>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-2 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="https://rohit-resume.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;