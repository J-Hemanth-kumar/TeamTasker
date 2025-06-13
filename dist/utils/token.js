"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.removeToken = exports.getToken = void 0;
const getToken = () => localStorage.getItem('token');
exports.getToken = getToken;
const removeToken = () => localStorage.removeItem('token');
exports.removeToken = removeToken;
const saveToken = (token) => localStorage.setItem('token', token);
exports.saveToken = saveToken;
