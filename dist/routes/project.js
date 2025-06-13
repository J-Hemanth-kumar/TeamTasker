"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController_1 = require("../controllers/projectController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = express_1.default.Router();
router.post('/', auth_1.authenticateJWT, (0, role_1.authorizeRoles)('Admin', 'ProjectManager'), projectController_1.createProject);
router.get('/', auth_1.authenticateJWT, projectController_1.getAllProjects);
router.delete('/:id', auth_1.authenticateJWT, (0, role_1.authorizeRoles)('Admin'), projectController_1.deleteProject);
exports.default = router;
