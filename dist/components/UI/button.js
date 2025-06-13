"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_slot_1 = require("@radix-ui/react-slot");
const utils_1 = require("../../lib/utils");
const buttonVariants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-black hover:bg-gray-100',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200'
};
const Button = react_1.default.forwardRef(({ className, variant = 'default', asChild = false, size, children, ...props }, ref) => {
    const Comp = asChild ? react_slot_1.Slot : 'button';
    return ((0, jsx_runtime_1.jsx)(Comp, { className: (0, utils_1.cn)('inline-flex items-center px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2', buttonVariants[variant], className), ref: ref, ...props, children: children }));
});
exports.Button = Button;
Button.displayName = 'Button';
