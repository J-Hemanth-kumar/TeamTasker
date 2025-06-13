"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const authcontext_1 = require("@/context/authcontext");
const react_router_dom_1 = require("react-router-dom");
const ProtectedRoute = ({ children }) => {
    const { token } = (0, authcontext_1.useAuth)();
    if (!token) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/login", replace: true });
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.default = ProtectedRoute;
