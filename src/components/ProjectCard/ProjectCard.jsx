import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech = [], link, github, featured }) => {
  return (
    <div className="relative group h-full">
      <div className={`flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 ${featured ? 'bg-slate-900/80 border-2 border-sky-500/50 shadow-lg shadow-sky-500/20' : 'bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/30'} backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10`}
      >
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-20 shadow-lg shadow-amber-500/20">
            <FaExternalLinkAlt className="text-[10px]" />
            <span>FEATURED</span>
          </div>
        )}

        {/* Header */}
        <div className="relative h-56 flex items-center justify-center overflow-hidden group-hover:after:opacity-100 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-900 after:to-transparent after:opacity-60 after:transition-opacity after:duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-indigo-700 opacity-90 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

          <div className="relative z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <div className="text-6xl text-white drop-shadow-lg">💻</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col relative z-10">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{title}</h3>
          <p className="text-slate-400 flex-1 mb-6 leading-relaxed text-sm">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, i) => (
              <span key={i} className="bg-slate-800/80 border border-slate-700 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full hover:bg-sky-500/10 hover:border-sky-500/30 transition-colors">
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                <span>Live Demo</span>
                <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 bg-slate-800 text-white text-sm font-bold rounded-xl border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2">
                <FaGithub />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;