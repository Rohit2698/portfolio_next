import { ExternalLink, Github } from 'lucide-react';
import Cannweb from "../assets/cann_web.png";
import Cannclub from "../assets/cann_club.png";
import Doubt from "../assets/doubt-jee.png";
import hauntedVillaImage from "../assets/website/hauntedvilla.png";
import FlappyImage from "../assets/website/flappy.png";
import MovieImage from "../assets/website/movie.png";
import NewsAppImage from "../assets/website/newsapp.png";

const Projects = () => {
  const freelanceProjects = [
    {
      title: 'Cannabis Connection',
      description: 'A website that is helping dispensary to sell the weed boxes and allow customer to select the boxes from different dispensary as per there location.',
      image: Cannweb,
      technologies: ['React', 'Firebase', '@mui/material'],
      liveUrl: 'https://cannabisconn.com/',
      featured: true,
      githubUrl: ''
    },
    {
      title: 'Cannabis Club',
      description: 'A application that helps different dispensary to signup with our application and create products that they want to sell to there customers. Customer can signup with the website and buy the product subscription based or single product.',
      image: Cannclub,
      technologies: ['React', 'Firebase', 'Aeropay', 'NodeJs'],
      liveUrl: 'https://weedboxclub.com/',
      featured: true,
    },
    {
      title: 'Doubt Jee',
      description: 'The Web application for the students. The Student can search for the questions and find the answers. The admin is allowed to enter question with answers.',
      image: Doubt,
      technologies: ['React', 'Firebase'],
      liveUrl: 'https://doubtjee.com/',
      featured: false,
    },
  ];

const personalProject = [
    {
      id: 1,
      title: 'Haunted house',
      githubUrl: 'https://github.com/Rohit2698/threejs-projects',
      liveUrl: 'https://horrorgraveyard.netlify.app/',
      image: hauntedVillaImage,
      descripiton: "This is just my side project. I was keen how the THREE JS work. And going through some documentation and stuff. Created this haunted villa.",
      technologies: ['React', 'THREE JS'],
    },
    {
      id: 2,
      title: 'Flappy bird - Clone',
      githubUrl: 'https://github.com/Rohit2698/flappy-bird-clone',
      liveUrl: 'https://sad-jang-66e512.netlify.app/',
      description: "This may look easy project but it is worth it. This project is just for me to see can we create game using javascription. Learning DOM manipulation and stuff. It was fun creating this",
      image: FlappyImage,
      technologies: ['React'],
    },
    {
      id: 4,
      title: 'Movie Search',
      githubUrl: 'https://github.com/Rohit2698/Covid19',
      liveUrl: 'https://moviechuno.netlify.app/',
      image: MovieImage,
      technologies: ['React'],
      description: "This website is just a simple website which will help you find the movie when you feel bored. And also you can see the description of the movies"
    },
    {
      id: 5,
      title: 'News Application',
      githubUrl: 'https://github.com/Rohit2698/News-Application',
      liveUrl: 'https://user-images.githubusercontent.com/36307148/111283857-8ec49980-8665-11eb-9146-95edaf5678f0.mp4',
      image: NewsAppImage,
      technologies: ['React Native', 'Native Base'],
      description: "A smooth react native news application. Which will will help you updated on what is happening in the world"
    },
  ]
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Freelance <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid gap-8">
            {freelanceProjects.map((project, index) => (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center p-8 bg-slate-700/30 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm border border-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    {
                      project.githubUrl && <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-slate-500 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    }
                    
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mb-16 mt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Personal <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my own small works
            </p>
          </div>
          <div className="grid gap-8">
            {personalProject.map((project, index) => (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center p-8 bg-slate-700/30 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm border border-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    {
                      project.githubUrl && <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-slate-500 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    }
                    
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a 
              href="https://github.com/Rohit2698"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl transition-all duration-300 font-medium text-lg"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;