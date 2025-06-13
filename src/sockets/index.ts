import { Server as IOServer } from 'socket.io';

export const registerSocket = (server: any) => {
  const io = new IOServer(server, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
    });

    socket.on('taskUpdated', (task) => {
      io.to(task.projectId).emit('taskUpdated', task);
    });
  });
};
