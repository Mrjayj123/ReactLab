import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Note: Using port 5000 - ensure your json-server matches this!
    fetch('http://localhost:5000/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false); // Stop loading even if it fails
      });
  }, []);

  if (loading) return <div className="loading">Initializing Portfolio...</div>;

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<ProjectList projects={projects} />} />
            <Route path="/add-project" element={<ProjectForm onAddProject={(p) => setProjects([...projects, p])} />} />
            <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;