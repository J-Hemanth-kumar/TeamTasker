"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.getAllProjects = exports.createProject = void 0;
const projects_1 = __importDefault(require("@/models/projects"));
const createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const project = await projects_1.default.create({ name, description });
        res.status(201).json(project);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating project', error });
    }
};
exports.createProject = createProject;
const getAllProjects = async (req, res) => {
    try {
        const projects = await projects_1.default.findAll();
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
};
exports.getAllProjects = getAllProjects;
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await projects_1.default.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: 'Project not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting project', error });
    }
};
exports.deleteProject = deleteProject;
