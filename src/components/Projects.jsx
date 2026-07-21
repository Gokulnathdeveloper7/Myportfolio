import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Gokulnathdeveloper7/repos?sort=updated&per_page=30')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filtered = data
            .filter(r => !r.fork && !r.archived)
            .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
            .slice(0, 6);
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getLanguageColor = (lang) => {
    const colors = {
      Python: '#3572A5', JavaScript: '#F7DF1E', HTML: '#E34F26', CSS: '#1572B6',
      Jupyter: '#F37626', 'Jupyter Notebook': '#F37626', TypeScript: '#3178C6',
    };
    return colors[lang] || '#6B7280';
  };

  return (
    <section id="projects" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <BlurText text="Projects" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
        <p className="text-lg text-slate-400">Fetched live from GitHub — real projects, real code</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-[3px] border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="group flex flex-col bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
              {/* Colored top bar */}
              <div className="h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                    {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                  </h3>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-500 transition-colors flex-shrink-0 ml-2">
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {repo.description || 'A data analytics project built with modern tools and techniques.'}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: getLanguageColor(repo.language) }}></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                    <FaStar className="text-amber-400" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <a href="https://github.com/Gokulnathdeveloper7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-full transition-all shadow-sm hover:-translate-y-0.5">
          <FaGithub /> View All on GitHub
        </a>
      </div>
    </section>
  );
}
