"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const socket_1 = __importDefault(require("../utils/socket"));
const axios_1 = __importDefault(require("axios"));
const button_1 = require("@/components/ui/button");
const CreateTaskModal_1 = __importDefault(require("@/components/CreateTaskModal"));
const ProjectBoard = () => {
    const { projectId } = (0, react_router_dom_1.useParams)();
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const fetchTasks = () => {
        if (!projectId)
            return;
        axios_1.default.get(`/api/tasks/project/${projectId}`)
            .then((res) => setTasks(res.data))
            .catch(console.error);
    };
    (0, react_1.useEffect)(() => {
        if (!projectId)
            return;
        socket_1.default.emit('joinProject', projectId);
        fetchTasks();
    }, [projectId]);
    (0, react_1.useEffect)(() => {
        const handleTaskUpdated = (updatedTask) => {
            setTasks((prevTasks) => prevTasks.map((task) => task.id === updatedTask.id ? updatedTask : task));
        };
        socket_1.default.on('taskUpdated', handleTaskUpdated);
        return () => {
            socket_1.default.off('taskUpdated', handleTaskUpdated);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold", children: "Project Board" }), (0, jsx_runtime_1.jsx)(button_1.Button, { onClick: () => setShowModal(true), children: "Create Task" })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 gap-4", children: ['Todo', 'InProgress', 'Completed'].map((status) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-gray-100 p-2 rounded shadow", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold mb-2", children: status }), tasks.filter(task => task.status === status).map(task => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-2 mb-2 shadow rounded", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-medium", children: task.title }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-gray-500", children: ["Assigned to: ", task.assignee?.username] })] }, task.id)))] }, status))) }), projectId && ((0, jsx_runtime_1.jsx)(CreateTaskModal_1.default, { open: showModal, onOpenChange: setShowModal, projectId: projectId, refreshTasks: fetchTasks }))] }));
};
exports.default = ProjectBoard;
