import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';

interface CommentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId: string;
}

const CommentModal = ({ open, onOpenChange, taskId }: CommentModalProps) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    await axios.post(`/api/comments`, { taskId, text: comment });
    setComment('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Comment</DialogTitle>
        </DialogHeader>
        <Input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter comment" />
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;