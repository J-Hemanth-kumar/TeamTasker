"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.Project = exports.Task = exports.User = exports.sequelize = void 0;
// src/models/index.ts
const database_1 = __importDefault(require("../config/database")); // Your Sequelize config
exports.sequelize = database_1.default;
const users_1 = __importDefault(require("./users"));
exports.User = users_1.default;
const tasks_1 = __importDefault(require("./tasks"));
exports.Task = tasks_1.default;
const projects_1 = __importDefault(require("./projects"));
exports.Project = projects_1.default;
const role_1 = __importDefault(require("./role"));
exports.Role = role_1.default;
// Define associations
tasks_1.default.belongsTo(users_1.default, { as: 'assignee' });
users_1.default.hasMany(tasks_1.default, { foreignKey: 'assigneeId' });
projects_1.default.hasMany(tasks_1.default);
tasks_1.default.belongsTo(projects_1.default);
