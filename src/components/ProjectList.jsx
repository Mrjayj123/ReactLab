// ProjectList.js
import { Link } from 'react-router-dom';

function ProjectList({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((p) => (
        <div key={p.id} className="project-card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <Link to={`/projects/${p.id}`} className="btn-link">View Details</Link>
        </div>
      ))}
    </div>
  );
}

// ProjectDetail.js
import { useParams } from 'react-router-dom';

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p>Loading project details...</p>;

  return (
    <div className="detail-view">
      <img src={project.image} alt={project.title} className="hero-img" />
      <h1>{project.title}</h1>
      <p className="tech-tag">{project.technologies}</p>
      <p className="description">{project.description}</p>
    </div>
  );
}
export default ProjectDetail;