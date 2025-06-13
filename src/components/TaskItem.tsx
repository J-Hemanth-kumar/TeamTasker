import { Button } from './ui/button';
import socket from '../utils/socket';
import axios from 'axios';

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    status: string;
    assignee?: { username?: string };
    // add other fields as needed
  };
  refreshTasks: () => void;
}

const TaskItem = ({ task, refreshTasks }: TaskItemProps) => {
  const handleMarkDone = async () => {
    try {
      const updatedTask = { ...task, status: 'Completed' };
      await axios.put(`/api/tasks/${task.id}`, updatedTask);
      socket.emit('taskUpdated', updatedTask);
      refreshTasks();
    } catch (err) {
      console.error('Failed to update task', err);
    }
  };

  return (
    <div className="bg-white p-3 shadow rounded mb-2">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-500">Assigned to: {task.assignee?.username || 'Unassigned'}</p>
      <Button size="sm" variant="default" onClick={handleMarkDone} className="mt-2">
        Mark Done
      </Button>
    </div>
  );
};

export default TaskItem;