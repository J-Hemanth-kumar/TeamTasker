"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const token_1 = require("./token");
const instance = axios_1.default.create({
    baseURL: '/api',
});
instance.interceptors.request.use((config) => {
    const token = (0, token_1.getToken)();
    if (token) {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});
exports.default = instance;
