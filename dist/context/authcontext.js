"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const AuthContext = (0, react_1.createContext)(undefined);
const AuthProvider = ({ children }) => {
    const [token, setToken] = (0, react_1.useState)(localStorage.getItem('token') || '');
    const login = async (username, password) => {
        try {
            const res = await axios_1.default.post('/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
        }
        catch (error) {
            // Optionally handle error here (e.g., show message)
            throw error;
        }
    };
    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
    };
    return ((0, jsx_runtime_1.jsx)(AuthContext.Provider, { value: { token, login, logout }, children: children }));
};
exports.AuthProvider = AuthProvider;
const useAuth = () => {
    const context = (0, react_1.useContext)(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
exports.useAuth = useAuth;
