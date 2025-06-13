"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("./ui/button");
const socket_1 = __importDefault(require("../utils/socket"));
const axios_1 = __importDefault(require("axios"));
const TaskItem = ({ task, refreshTasks }) => {
    const handleMarkDone = async () => {
        try {
            const updatedTask = { ...task, status: 'Completed' };
            await axios_1.default.put(`/api/tasks/${task.id}`, updatedTask);
            socket_1.default.emit('taskUpdated', updatedTask);
            refreshTasks();
        }
        catch (err) {
            console.error('Failed to update task', err);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-3 shadow rounded mb-2", children: [(0, jsx_runtime_1.jsx)("h3", { className: "font-semibold", children: task.title }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-gray-500", children: ["Assigned to: ", task.assignee?.username || 'Unassigned'] }), (0, jsx_runtime_1.jsx)(button_1.Button, { size: "sm", variant: "default", onClick: handleMarkDone, className: "mt-2", children: "Mark Done" })] }));
};
exports.default = TaskItem;
