"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const users_1 = __importDefault(require("../models/users"));
const role_1 = __importDefault(require("../models/role"));
const projects_1 = __importDefault(require("../models/projects"));
const tasks_1 = __importDefault(require("../models/tasks"));
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'teamtasker_db',
    dialect: 'postgres',
    username: 'postgres', // Change if needed
    password: 'Hemanth@2002', // Replace with your actual password
    host: 'localhost',
    port: 5432,
    models: [users_1.default, role_1.default, projects_1.default, tasks_1.default],
});
exports.default = sequelize;
