"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const dialog_1 = require("@/components/ui/dialog");
const input_1 = require("@/components/ui/input");
const button_1 = require("@/components/ui/button");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const CreateTaskModal = ({ open, onOpenChange, projectId, refreshTasks }) => {
    const [title, setTitle] = (0, react_1.useState)('');
    const [description, setDescription] = (0, react_1.useState)('');
    const handleSubmit = async () => {
        await axios_1.default.post('/api/tasks', { projectId, title, description });
        setTitle('');
        setDescription('');
        onOpenChange(false);
        refreshTasks();
    };
    return ((0, jsx_runtime_1.jsx)(dialog_1.Dialog, { open: open, onOpenChange: onOpenChange, children: (0, jsx_runtime_1.jsxs)(dialog_1.DialogContent, { children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogHeader, { children: (0, jsx_runtime_1.jsx)(dialog_1.DialogTitle, { children: "Create Task" }) }), (0, jsx_runtime_1.jsx)(input_1.Input, { value: title, onChange: e => setTitle(e.target.value), placeholder: "Task title" }), (0, jsx_runtime_1.jsx)(input_1.Input, { value: description, onChange: e => setDescription(e.target.value), placeholder: "Task description" }), (0, jsx_runtime_1.jsx)(button_1.Button, { onClick: handleSubmit, children: "Create" })] }) }));
};
exports.default = CreateTaskModal;
