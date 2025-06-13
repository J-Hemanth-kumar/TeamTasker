import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';

interface CreateTaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectId: string;
  refreshTasks: () => void;
}

const CreateTaskModal = ({ open, onOpenChange, projectId, refreshTasks }: CreateTaskModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/tasks', { projectId, title, description });
    setTitle('');
    setDescription('');
    onOpenChange(false);
    refreshTasks();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" />
        <Input value={description} onChange={e => setDescription(e.target.value)} placeholder="Task description" />
        <Button onClick={handleSubmit}>Create</Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskModal;