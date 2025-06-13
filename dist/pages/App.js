"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("@/pages/Login"));
const Dashboard_1 = __importDefault(require("@/pages/Dashboard"));
const ProjectBoard_1 = __importDefault(require("@/pages/ProjectBoard"));
const ProtectedRoute_1 = __importDefault(require("@/components/ProtectedRoute"));
const UserRoleContext_1 = require("@/context/UserRoleContext");
const Navbar_1 = __importDefault(require("@/components/Navbar"));
const App = () => ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(UserRoleContext_1.UserRoleProvider, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/dashboard", element: (0, jsx_runtime_1.jsx)(ProtectedRoute_1.default, { children: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/projects/:projectId", element: (0, jsx_runtime_1.jsx)(ProtectedRoute_1.default, { children: (0, jsx_runtime_1.jsx)(ProjectBoard_1.default, {}) }) })] })] }) }));
exports.default = App;
