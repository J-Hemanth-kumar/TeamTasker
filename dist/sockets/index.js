"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSocket = void 0;
const socket_io_1 = require("socket.io");
const registerSocket = (server) => {
    const io = new socket_io_1.Server(server, {
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
exports.registerSocket = registerSocket;
