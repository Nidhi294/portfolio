import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Youtube, Link } from 'lucide-react';

export default function Projects() {
  const experiences = [
    {
      title: "Content Creator / Video Editor",
      company: "Oppvenuz",
      year: "2025",
      description: [
        "Created content for social media platforms and integrated AI tools into creative workflows.",
        "Managed content strategy, marketing campaigns, and Meta Ads.",
        "Consecutively awarded 'Best Employee of the Month' for outstanding performance."
      ],
      color: "from-purple-500/20 to-pink-500/20",
      bgImage: "/oppvenuz_bg.png"
    },
    {
      title: "Video Editor",
      company: "Prographer & Team Tangulwar",
      year: "2024–2025",
      description: [
        "Edited high-quality ad films, short documentaries, and wedding films.",
        "Delivered cinematic videos by blending authentic storytelling with innovative editing techniques."
      ],
      color: "from-cyan-500/20 to-blue-500/20",
      bgImage: "/cinematic_bg.png"
    },
    {
      title: "Video Editor – Social Media",
      company: "Brainbees Solutions (FirstCry)",
      year: "2022–2023",
      description: [
        "Collaborated with content, design, and marketing teams to produce high-performing reels.",
        "Driven strong audience engagement through data-backed video editing strategies."
      ],
      color: "from-emerald-500/20 to-teal-500/20",
      bgImage: "/social_bg.png"
    },
    {
      title: "3D Animator",
      company: "Xentrix Studios",
      year: "2020–2021",
      description: [
        "Worked on 3D animated CG series like Eureka! (Disney Junior) and Ridley Jones (Netflix).",
        "Applied skills in 3D Animation, Content Production, and Drawing."
      ],
      color: "from-red-500/20 to-orange-500/20",
      bgImage: "/xentrix_bg.png",
      link: "https://vimeo.com/680047420"
    }
  ];

  return (
    <section className="relative z-20 w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto mb-32">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Professional Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-white/20 p-8 flex flex-col h-[400px]"
            >
              {/* 3D Background Image */}
              <div 
                className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center"
                style={{ backgroundImage: `url(${exp.bgImage})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 z-0 bg-gradient-to-br ${exp.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none mix-blend-overlay`} />
              
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 z-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex-1 flex flex-col justify-end">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">{exp.company}</p>
                    <span className="text-xs font-semibold text-white/70 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">{exp.year}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 drop-shadow-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">{exp.title}</h4>
                  <ul className="text-gray-200 text-sm font-light leading-relaxed drop-shadow-sm list-disc pl-4 space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all w-fit border border-white/10 hover:border-white/30"
                    >
                      <Link className="w-4 h-4" />
                      View Animation Work
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        {/* Education */}
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            Education
          </h3>
          <div className="space-y-8">
            <div className="border-l border-white/20 pl-6">
              <span className="text-sm text-gray-500 font-mono">2024</span>
              <h4 className="text-xl font-medium text-white">Content Writing</h4>
              <p className="text-gray-400 mt-1">MyCaptain</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <span className="text-sm text-gray-500 font-mono">2015 – 2018</span>
              <h4 className="text-xl font-medium text-white">3D Animation & Filmmaking</h4>
              <p className="text-gray-400 mt-1">Reliance Education, Pune</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <span className="text-sm text-gray-500 font-mono">2018</span>
              <h4 className="text-xl font-medium text-white">Bachelor of Arts</h4>
              <p className="text-gray-400 mt-1">Savitribai Phule Pune University</p>
            </div>
          </div>
        </div>

        {/* Skills & AI Tools */}
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            Skills & Software
          </h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {['Video Editing', 'Adobe Premiere Pro', 'Motion Graphics', 'Adobe After Effects', 'Content Strategy', 'Ad Copywriting', 'Filmmaking', 'Stop Motion'].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-white/80 backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>

          <h4 className="text-xl font-medium text-white mb-6">Gen AI tool</h4>
          <div className="flex flex-wrap gap-3">
            {['Claude', 'ChatGPT', 'Veo', 'Kling', 'MidJourney', 'Runway', 'HeyGen', 'ElevenLabs', 'Suno'].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-sm text-white/90 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-32 relative rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-black p-8 md:p-16 flex flex-col items-center text-center group">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Explore my full
          </h3>
          
          <div className="mb-10 relative w-full max-w-[600px] h-[80px] md:h-[120px] animate-[pulse_1s_ease-in-out_infinite]">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 850 150" 
              preserveAspectRatio="none" 
              className="overflow-visible"
              style={{ filter: 'drop-shadow(0px 0px 25px rgba(59,130,246,0.8))' }}
            >
              {/* Cursive Portfolio Text */}
              <text 
                x="50%" 
                y="54%" 
                dominantBaseline="middle" 
                textAnchor="middle" 
                fontFamily="var(--font-cursive)" 
                fontWeight="400" 
                fontStyle="normal" 
                fontSize="180" 
                fill="#bfdbfe"
              >
                Portfolio
              </text>
            </svg>
          </div>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl font-light leading-relaxed">
            Dive into my curated collection of visual narratives, cinematic video editing, and motion graphics on Behance.
          </p>
          <a 
            href="https://www.behance.net/nidhigattani1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            Visit Behance Profile
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="mb-8 relative w-full max-w-[450px]">
            <div className="cinematic-container relative w-full h-[150px] rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
              <div className="cinematic-particles"></div>
              <div className="studio-light-left"></div>
              <div className="studio-light-right"></div>
              
              <div className="cinematic-camera-push relative z-10 flex w-full justify-center">
                <h1 
                  className="cinematic-text uppercase whitespace-nowrap"
                  data-text="NIDHI G"
                  style={{ 
                    fontFamily: 'var(--font-saira-stencil), sans-serif',
                    fontSize: '57px',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1,
                    letterSpacing: '0.05em'
                  }}
                >
                  NIDHI G
                </h1>
              </div>
            </div>
          </div>
          <h3 className="text-4xl font-bold text-white mb-2">Let's create</h3>
          <p className="text-gray-400">Open for full-time, part-time, and freelance opportunities and collaborations.</p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="mailto:gattaninidhi3@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
            <Mail className="w-5 h-5 text-gray-400" />
            gattaninidhi3@gmail.com
          </a>
          <div className="flex items-center gap-3 text-white/80">
            <Phone className="w-5 h-5 text-gray-400" />
            +91 9096341521
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <MapPin className="w-5 h-5 text-gray-400" />
            Amravati, MH. India
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <a href="https://www.linkedin.com/in/nidhi-gattani-591046124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            LinkedIn
          </a>
          <a href="https://www.behance.net/nidhigattani1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-blue-500 transition-colors">
            <Link className="w-5 h-5 text-gray-400" />
            Behance
          </a>
          <a href="https://www.youtube.com/@nidhigattani72" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-red-500 transition-colors">
            <Youtube className="w-5 h-5 text-gray-400" />
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
