import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddProject(data);
        navigate('/'); 
      });
  };

  return (
    <section className="form-section">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <input name="title" placeholder="Project Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="image" placeholder="Image URL" onChange={handleChange} required />
        <input name="technologies" placeholder="Tech Stack (e.g. React, Tailwind)" onChange={handleChange} />
        <button type="submit" className="btn-submit">Publish Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;