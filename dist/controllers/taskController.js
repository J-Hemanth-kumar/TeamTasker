"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksByProject = exports.updateTask = exports.createTask = void 0;
const tasks_1 = __importDefault(require("@/models/tasks"));
const createTask = async (req, res) => {
    try {
        const { title, description, projectId, assigneeId } = req.body;
        const task = await tasks_1.default.create({ title, description, projectId, assigneeId });
        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};
exports.createTask = createTask;
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await tasks_1.default.update(req.body, { where: { id } });
        if (updated) {
            res.status(200).json({ message: 'Task updated' });
        }
        else {
            res.status(404).json({ message: 'Task not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};
exports.updateTask = updateTask;
const getTasksByProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const tasks = await tasks_1.default.findAll({ where: { projectId } });
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};
exports.getTasksByProject = getTasksByProject;
