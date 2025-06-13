"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const button_1 = require("@/components/ui/button");
const react_router_dom_1 = require("react-router-dom");
const Dashboard = () => {
    const [projects, setProjects] = (0, react_1.useState)([]);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        axios_1.default.get('/api/projects')
            .then(res => setProjects(res.data))
            .catch(console.error);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold mb-4", children: "Your Projects" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: projects.map((project) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-4 rounded shadow", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold mb-2", children: project.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-500 mb-2", children: project.description }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "outline", onClick: () => navigate(`/projects/${project.id}`), children: "View Project" })] }, project.id))) })] }));
};
exports.default = Dashboard;
