import express from 'express';
import { createTask, updateTask, getTasksByProject } from '../controllers/taskController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRoles } from '../middleware/role';

const router = express.Router();

router.post('/', authenticateJWT, authorizeRoles('ProjectManager'), createTask);
router.put('/:id', authenticateJWT, authorizeRoles('Developer', 'Tester'), updateTask);
router.get('/project/:projectId', authenticateJWT, getTasksByProject);

export default router;
