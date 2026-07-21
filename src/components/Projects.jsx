import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaSpinner } from 'react-icons/fa';

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
          <div className="project-visual-mock netflix-mock">
            <div className="mock-header">
              <span className="mock-title">Netflix Content Analytics</span>
              <span className="mock-kpi">Total Titles: 8,807</span>
            </div>
            <div className="mock-body">
              <div className="mock-bar-chart">
                <div className="mock-bar" style={{ height: '70%', '--label': '"Movies"' }}></div>
                <div className="mock-bar" style={{ height: '40%', '--label': '"TV Shows"' }}></div>
              </div>
              <div className="mock-pie-chart-donut">
                <div className="donut-segment"></div>
                <div className="donut-center">
                  <span>69%</span>
                  <span className="sub">US/UK</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'ipl':
        return (
          <div className="project-visual-mock ipl-mock">
            <div className="mock-header">
              <span className="mock-title">SELECT * FROM ipl_stats;</span>
            </div>
            <div className="mock-table-wrap">
              <table className="mock-table">
                <thead>
                  <tr>
                    <th>player_name</th>
                    <th>runs</th>
                    <th>strike_rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>V. Kohli</td>
                    <td>6624</td>
                    <td>130.1</td>
                  </tr>
                  <tr>
                    <td>MS Dhoni</td>
                    <td>4978</td>
                    <td>135.2</td>
                  </tr>
                  <tr>
                    <td>RG Sharma</td>
                    <td>5879</td>
                    <td>129.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'sales':
        return (
          <div className="project-visual-mock sales-mock">
            <div className="mock-grid">
              <div className="mock-stat-box">
                <span className="label">Revenue</span>
                <span className="val">$124.5K</span>
                <span className="trend positive">+14.2%</span>
              </div>
              <div className="mock-stat-box">
                <span className="label">Margin</span>
                <span className="val">24.5%</span>
                <span className="trend negative">-1.8%</span>
              </div>
            </div>
            <div className="mock-line-chart">
              <svg viewBox="0 0 100 40" className="svg-line">
                <path d="M0,30 Q20,10 40,25 T80,15 T100,5" fill="none" stroke="var(--accent-color)" strokeWidth="2" />
                <path d="M0,30 Q20,10 40,25 T80,15 T100,5 L100,40 L0,40 Z" fill="rgba(37, 99, 235, 0.1)" />
              </svg>
            </div>
          </div>
        );
      case 'customer':
        return (
          <div className="project-visual-mock customer-mock">
            <div className="mock-scatter">
              <div className="scatter-dot" style={{ bottom: '20%', left: '30%', backgroundColor: 'var(--accent-color)' }}></div>
              <div className="scatter-dot" style={{ bottom: '50%', left: '70%', backgroundColor: 'var(--accent-secondary)' }}></div>
              <div className="scatter-dot" style={{ bottom: '80%', left: '20%', backgroundColor: 'var(--accent-color)' }}></div>
              <div className="scatter-dot" style={{ bottom: '30%', left: '60%', backgroundColor: 'var(--text-muted)' }}></div>
              <div className="scatter-dot" style={{ bottom: '70%', left: '80%', backgroundColor: 'var(--accent-secondary)' }}></div>
            </div>
            <div className="mock-insights-badge">Segment A: Loyal/High-Spenders</div>
          </div>
        );
      case 'generic':
        return (
          <div className="project-visual-mock generic-mock" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
            <FaGithub style={{ fontSize: '4rem', color: 'var(--text-muted)' }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world data applications and analytics solutions designed for decision makers</p>
        </div>

        {loading ? (
          <div className="loading-projects" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            <FaSpinner style={{ fontSize: '2rem', marginBottom: '1rem' }} />
            <p>Fetching projects from GitHub...</p>
          </div>
        ) : error ? (
          <div className="error-projects" style={{ textAlign: 'center', padding: '3rem', color: 'var(--accent-secondary)' }}>
            <p>Failed to load projects: {error}</p>
          </div>
        ) : (
          <div className="projects-list-grid">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-detail-card reveal reveal-delay-${(index % 4) * 100}`}>
              <div className="project-header-row">
                <div className="project-meta">
                  <span className="project-number">0{project.id}</span>
                  <h3 className="project-title-name">{project.title}</h3>
                  <h4 className="project-subtitle-text">{project.subtitle}</h4>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source on GitHub">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn active-demo" title="Open Live Report">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>

              <div className="project-body-row">
                <div className="project-visual-pane">
                  {renderVisual(project.visualType)}
                </div>

                <div className="project-info-pane">
                  <p className="project-desc-text">{project.desc}</p>

                  <div className="project-impact-box">
                    <div className="impact-header">
                      <FaInfoCircle className="impact-icon" />
                      <span>Business Impact</span>
                    </div>
                    <p className="impact-desc">{project.impact}</p>
                  </div>

                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
