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
const CommentModal = ({ open, onOpenChange, taskId }) => {
    const [comment, setComment] = (0, react_1.useState)('');
    const handleSubmit = async () => {
        await axios_1.default.post(`/api/comments`, { taskId, text: comment });
        setComment('');
        onOpenChange(false);
    };
    return ((0, jsx_runtime_1.jsx)(dialog_1.Dialog, { open: open, onOpenChange: onOpenChange, children: (0, jsx_runtime_1.jsxs)(dialog_1.DialogContent, { children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogHeader, { children: (0, jsx_runtime_1.jsx)(dialog_1.DialogTitle, { children: "Add Comment" }) }), (0, jsx_runtime_1.jsx)(input_1.Input, { value: comment, onChange: (e) => setComment(e.target.value), placeholder: "Enter comment" }), (0, jsx_runtime_1.jsx)(button_1.Button, { onClick: handleSubmit, children: "Submit" })] }) }));
};
exports.default = CommentModal;
