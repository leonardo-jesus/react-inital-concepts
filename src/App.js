import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['App Development', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`]);
    
    console.log(projects);
  };

  return (
    <>
      <Header title="Projects"/>

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  )
};

export default App;