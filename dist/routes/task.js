"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = express_1.default.Router();
router.post('/', auth_1.authenticateJWT, (0, role_1.authorizeRoles)('ProjectManager'), taskController_1.createTask);
router.put('/:id', auth_1.authenticateJWT, (0, role_1.authorizeRoles)('Developer', 'Tester'), taskController_1.updateTask);
router.get('/project/:projectId', auth_1.authenticateJWT, taskController_1.getTasksByProject);
exports.default = router;
