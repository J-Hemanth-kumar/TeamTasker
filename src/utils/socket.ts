// src/utils/socket.ts
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Or use your API base URL
export default socket;
