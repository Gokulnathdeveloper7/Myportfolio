import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Netflix Analytics Dashboard',
      subtitle: 'Business Intelligence & Content Insights',
      tech: ['Power BI', 'DAX', 'Power Query', 'Excel'],
      desc: 'An interactive business intelligence dashboard designed to track Netflix content trends, genre distributions, and ratings across global regions.',
      impact: 'Identified a 40% year-over-year growth in documentary content, enabling licensing recommendations that align with global viewing trends.',
      github: 'https://github.com/Gokulnathdeveloper7/Netflix-data',
      demo: 'https://github.com/Gokulnathdeveloper7',
      visualType: 'netflix',
    },
    {
      id: 2,
      title: 'IPL Data Analysis',
      subtitle: 'Relational Database Queries & Performance Metrics',
      tech: ['SQL', 'MySQL', 'Database Design', 'Data Cleaning'],
      desc: 'Designed and queried a relational database containing IPL match records to evaluate player stats, run rate trends, and overall team performance.',
      impact: 'Optimized complex JOIN queries to calculate strike rates and batting averages, reducing the dataset analysis time by 60% for team management reports.',
      github: 'https://github.com/Gokulnathdeveloper7/Ipl-dataset',
      demo: 'https://github.com/Gokulnathdeveloper7/Ipl-dataset',
      visualType: 'ipl',
    },
    {
      id: 3,
      title: 'Sales Performance Dashboard',
      subtitle: 'Corporate Revenue & Profitability Analysis',
      tech: ['Power BI', 'Excel', 'KPI Modeling', 'Data Modeling'],
      desc: 'A comprehensive sales analytics dashboard evaluating monthly revenues, profit margins, product performances, and regional sales managers KPIs.',
      impact: 'Highlighted a 12% margin drop in the western territory, leading to a product re-pricing strategy that recovered $15K in potential losses.',
      github: 'https://github.com/Gokulnathdeveloper7/Sales-dataset',
      demo: 'https://github.com/Gokulnathdeveloper7/Sales-dataset',
      visualType: 'sales',
    },
    {
      id: 4,
      title: 'Customer Insights Analysis',
      subtitle: 'Exploratory Data Analysis & Customer Segmentation',
      tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
      desc: 'Exploratory Data Analysis (EDA) on retail customer transaction logs to segment buyers based on demographics, purchase frequency, and basket size.',
      impact: 'Discovered high-value customer segments responsible for 60% of revenues, facilitating targeted campaigns that increased retention by 8%.',
      github: 'https://github.com/Gokulnathdeveloper7/Ipl-dataset',
      demo: 'https://github.com/Gokulnathdeveloper7/Ipl-dataset',
      visualType: 'customer',
    },
  ];

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

        <div className="projects-list-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-detail-card reveal reveal-delay-200">
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
      </div>
    </section>
  );
}
