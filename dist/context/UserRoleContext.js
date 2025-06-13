"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserRole = exports.UserRoleProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const jwt_decode_1 = require("jwt-decode");
const UserRoleContext = (0, react_1.createContext)({
    role: '',
    setRole: () => { },
});
const UserRoleProvider = ({ children }) => {
    const [role, setRole] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = (0, jwt_decode_1.jwtDecode)(token);
                setRole(decoded.role || '');
            }
            catch {
                setRole('');
            }
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(UserRoleContext.Provider, { value: { role, setRole }, children: children }));
};
exports.UserRoleProvider = UserRoleProvider;
const useUserRole = () => (0, react_1.useContext)(UserRoleContext);
exports.useUserRole = useUserRole;
