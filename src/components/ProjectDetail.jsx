import React from 'react';
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