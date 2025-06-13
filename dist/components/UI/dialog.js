"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogTitle = exports.DialogHeader = exports.DialogContent = exports.DialogTrigger = exports.Dialog = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const DialogPrimitive = __importStar(require("@radix-ui/react-dialog"));
const utils_1 = require("@/lib/utils");
const Dialog = DialogPrimitive.Root;
exports.Dialog = Dialog;
const DialogTrigger = DialogPrimitive.Trigger;
exports.DialogTrigger = DialogTrigger;
const DialogContent = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(DialogPrimitive.Portal, { children: [(0, jsx_runtime_1.jsx)(DialogPrimitive.Overlay, { className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" }), (0, jsx_runtime_1.jsx)(DialogPrimitive.Content, { ref: ref, className: (0, utils_1.cn)('fixed z-50 grid w-full max-w-md gap-4 border bg-white p-6 shadow-lg sm:rounded-lg', className), ...props })] })));
exports.DialogContent = DialogContent;
DialogContent.displayName = 'DialogContent';
const DialogHeader = ({ children, className }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)('flex flex-col space-y-2 text-center sm:text-left', className), children: children }));
exports.DialogHeader = DialogHeader;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("h2", { ref: ref, className: (0, utils_1.cn)('text-lg font-semibold leading-none tracking-tight', className), ...props })));
exports.DialogTitle = DialogTitle;
DialogTitle.displayName = 'DialogTitle';
