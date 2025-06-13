"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = void 0;
const users_1 = __importDefault(require("@/models/users"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedUsers = async () => {
    await users_1.default.destroy({ where: {} });
    const hashed = await bcrypt_1.default.hash('admin123', 10);
    await users_1.default.create({ username: 'admin', password: hashed, role: 'Admin' });
};
exports.seedUsers = seedUsers;
