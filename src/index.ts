import 'module-alias/register';
import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import sequelize from './config/database';
import authRoutes from './routes/auth';
import projectRoutes from './routes/project';
import taskRoutes from './routes/task';
import healthRoutes from './routes/health'; 
import { registerSocket } from './sockets';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api', healthRoutes); 

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
  const server = createServer(app);
  registerSocket(server);

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});