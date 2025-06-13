import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../utils/socket';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import CreateTaskModal from '@/components/CreateTaskModal';

interface Task {
  id: string;
  title: string;
  status: string;
  assignee?: {
    username: string;
  };
}

const ProjectBoard = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchTasks = () => {
    if (!projectId) return;
    axios.get(`/api/tasks/project/${projectId}`)
      .then((res) => setTasks(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    if (!projectId) return;
    socket.emit('joinProject', projectId);
    fetchTasks();
  }, [projectId]);

  useEffect(() => {
    const handleTaskUpdated = (updatedTask: Task) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    };
    socket.on('taskUpdated', handleTaskUpdated);
    return () => {
      socket.off('taskUpdated', handleTaskUpdated);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Project Board</h1>
        <Button onClick={() => setShowModal(true)}>Create Task</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {['Todo', 'InProgress', 'Completed'].map((status) => (
          <div key={status} className="bg-gray-100 p-2 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{status}</h2>
            {tasks.filter(task => task.status === status).map(task => (
              <div key={task.id} className="bg-white p-2 mb-2 shadow rounded">
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-500">Assigned to: {task.assignee?.username}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      {projectId && (
        <CreateTaskModal
          open={showModal}
          onOpenChange={setShowModal}
          projectId={projectId}
          refreshTasks={fetchTasks}
        />
      )}
    </div>
  );
};

export default ProjectBoard;