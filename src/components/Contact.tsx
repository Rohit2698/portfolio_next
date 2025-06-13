import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true)
    if(!formData.name || !formData.email || !formData.message){
      toast.error("Please enter all fields")
      return;
    }
    e.preventDefault();
    // Handle form submission here
    const templateParams = {
      to_name: formData.email,
      from_name: formData.name,
      message: formData.message,
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        templateParams,
        "oc863Ji72HvxCa3R5"
      )
      .then(
        () => {
          toast(
            "Hey! I got your mail. Let's catchup. I will mail you 😎",
            {
              position: "top-center",
            }
          );
        },
        () => {
          alert("error")
          toast.error(
            "Hey! Something went wrong🙃. You can contact me through whatsapp also.😄",
            {
              position: "top-center",
            }
          );
        }
      ).finally(() => {
        setIsLoading(false)
      })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you're a company looking to hire, or you're a fellow developer who'd 
                  like to connect, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white text-lg">rohit.thakur2698freelance@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-white text-lg">+91-8146919794</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white text-lg">Banglore, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Rohit2698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rohit-thakur-535769185/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                href="mailto:rohit.thakur2698.freelance@gmail.com"
                className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-700/30 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Send size={20} />
                  {
                    isLoading ? "Sending..":"Send Message"
                  }
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;