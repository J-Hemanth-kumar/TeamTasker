import express from 'express';
import { createProject, getAllProjects, deleteProject } from '../controllers/projectController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRoles } from '../middleware/role';

const router = express.Router();

router.post('/', authenticateJWT, authorizeRoles('Admin', 'ProjectManager'), createProject);
router.get('/', authenticateJWT, getAllProjects);
router.delete('/:id', authenticateJWT, authorizeRoles('Admin'), deleteProject);

export default router;
