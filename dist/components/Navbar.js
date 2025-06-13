"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("@/components/ui/button");
const UserRoleContext_1 = require("@/context/UserRoleContext");
const Navbar = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { role } = (0, UserRoleContext_1.useUserRole)();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "w-full flex justify-between items-center px-6 py-4 bg-white shadow", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl font-bold", children: "TeamTasker" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4", children: [(0, jsx_runtime_1.jsxs)("span", { className: "text-sm text-gray-600", children: ["Role: ", role] }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "outline", onClick: handleLogout, children: "Logout" })] })] }));
};
exports.default = Navbar;
