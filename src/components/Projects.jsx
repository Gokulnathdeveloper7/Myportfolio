import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaSpinner } from 'react-icons/fa';
import { ScrollStack } from './ScrollStack';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Gokulnathdeveloper7/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then((data) => {
        const fetchedProjects = data.filter(repo => !repo.fork).map((repo) => ({
          id: repo.id,
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
          subtitle: repo.language ? `Built with ${repo.language}` : 'GitHub Repository',
          tech: [repo.language, ...(repo.topics || [])].filter(Boolean),
          desc: repo.description || 'No description provided for this repository.',
          impact: `Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count} | Watchers: ${repo.watchers_count}`,
          github: repo.html_url,
          demo: repo.homepage || repo.html_url,
          visualType: getVisualType(repo.name),
        }));
        setProjects(fetchedProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching GitHub repos:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getVisualType = (repoName) => {
    const name = repoName.toLowerCase();
    if (name.includes('netflix')) return 'netflix';
    if (name.includes('ipl')) return 'ipl';
    if (name.includes('sales')) return 'sales';
    if (name.includes('customer')) return 'customer';
    return 'generic';
  };

  const renderVisual = (type) => {
    switch (type) {
      case 'netflix':
        return (
          <div className="w-full h-[250px] bg-red-900/20 border border-red-500/30 rounded-xl flex flex-col items-center justify-center p-4">
            <span className="text-red-400 font-bold text-xl mb-4">Netflix Analytics</span>
            <div className="w-full h-1/2 flex items-end gap-2 justify-center">
              <div className="w-8 bg-red-500 rounded-t-sm" style={{ height: '70%' }}></div>
              <div className="w-8 bg-red-400 rounded-t-sm" style={{ height: '40%' }}></div>
            </div>
          </div>
        );
      case 'ipl':
        return (
          <div className="w-full h-[250px] bg-blue-900/20 border border-blue-500/30 rounded-xl flex flex-col items-center justify-center p-4">
            <span className="text-blue-400 font-mono text-sm mb-4">SELECT * FROM ipl_stats;</span>
            <div className="flex flex-col gap-2 w-full max-w-[200px]">
              <div className="h-4 bg-blue-500/40 rounded w-full"></div>
              <div className="h-4 bg-blue-500/20 rounded w-[80%]"></div>
              <div className="h-4 bg-blue-500/20 rounded w-[90%]"></div>
            </div>
          </div>
        );
      case 'sales':
        return (
          <div className="w-full h-[250px] bg-green-900/20 border border-green-500/30 rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 to-transparent"></div>
             <span className="text-green-400 font-bold text-2xl relative z-10">$124.5K</span>
             <span className="text-green-500/70 text-sm relative z-10">+14.2% Revenue</span>
          </div>
        );
      case 'customer':
        return (
          <div className="w-full h-[250px] bg-purple-900/20 border border-purple-500/30 rounded-xl flex flex-col items-center justify-center p-4 relative">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full top-[20%] left-[30%]"></div>
            <div className="absolute w-6 h-6 bg-purple-400 rounded-full bottom-[30%] right-[20%]"></div>
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full top-[50%] left-[60%]"></div>
            <span className="text-purple-400 font-bold mt-auto bg-purple-900/50 px-3 py-1 rounded-full text-xs">Customer Segmentation</span>
          </div>
        );
      case 'generic':
        return (
          <div className="w-full h-[250px] bg-secondary/50 border border-border rounded-xl flex flex-col items-center justify-center">
            <FaGithub className="text-6xl text-muted-foreground" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Featured Projects</h2>
        <p className="text-lg text-muted-foreground">Real-world data applications and analytics solutions designed for decision makers</p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <FaSpinner className="text-4xl mb-4 animate-spin text-blue-500" />
          <p>Fetching projects from GitHub...</p>
        </div>
      ) : error ? (
        <div className="text-center py-20 text-red-500">
          <p>Failed to load projects: {error}</p>
        </div>
      ) : (
        <ScrollStack>
          {projects.map((project, index) => (
            <div key={project.id} className="w-full bg-card border border-border rounded-[2rem] p-8 md:p-12 shadow-xl shadow-black/5 flex flex-col md:flex-row gap-10 items-center justify-between group hover:border-blue-500/50 transition-colors">
              <div className="w-full md:w-1/2 flex flex-col text-left">
                <span className="text-6xl font-black text-secondary/30 mb-2">0{index + 1}</span>
                <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                <h4 className="text-lg text-blue-500 font-semibold mb-6">{project.subtitle}</h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{project.desc}</p>
                
                <div className="bg-secondary/50 border border-border p-4 rounded-xl mb-6">
                  <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <FaInfoCircle className="text-blue-500" /> Business Impact
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground hover:bg-border rounded-full transition-colors font-semibold">
                    <FaGithub /> Source
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-semibold shadow-lg shadow-blue-500/20">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                {renderVisual(project.visualType)}
              </div>
            </div>
          ))}
        </ScrollStack>
      )}
    </section>
  );
}
