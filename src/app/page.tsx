"use client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/page';
import ContactPage from './pages/contact/page';
import ProjectsPage from './pages/projects/page';

function App() {
  const basePath = "/my-website"
  return (
    <Router>
      <Routes>
        <Route path={basePath} element={<HomePage />} />
        <Route path={`${basePath}/contact`} element={<ContactPage />} />
        <Route path={`${basePath}/projects`} element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;