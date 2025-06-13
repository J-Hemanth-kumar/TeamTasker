"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const input_1 = require("@/components/ui/input");
const button_1 = require("@/components/ui/button");
const react_router_dom_1 = require("react-router-dom");
const Login = () => {
    const [form, setForm] = (0, react_1.useState)({ username: '', password: '' });
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios_1.default.post('/api/auth/login', form);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        }
        catch (err) {
            alert('Login failed');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "max-w-sm mx-auto mt-20 p-4 bg-white rounded shadow space-y-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-semibold", children: "Login" }), (0, jsx_runtime_1.jsx)(input_1.Input, { type: "text", placeholder: "Username", value: form.username, onChange: (e) => setForm({ ...form, username: e.target.value }) }), (0, jsx_runtime_1.jsx)(input_1.Input, { type: "password", placeholder: "Password", value: form.password, onChange: (e) => setForm({ ...form, password: e.target.value }) }), (0, jsx_runtime_1.jsx)(button_1.Button, { type: "submit", className: "w-full", children: "Login" })] }));
};
exports.default = Login;
