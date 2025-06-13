import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

type Project = {
  id: string | number;
  name: string;
  description?: string;
};

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{project.description}</p>
            <Button variant="outline" onClick={() => navigate(`/projects/${project.id}`)}>
              View Project
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;