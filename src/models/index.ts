// src/models/index.ts
import sequelize from '../config/database'; // Your Sequelize config
import User from './users';
import Task from './tasks';
import Project from './projects';
import Role from './role';

// Define associations
Task.belongsTo(User, { as: 'assignee' });
User.hasMany(Task, { foreignKey: 'assigneeId' });

Project.hasMany(Task);
Task.belongsTo(Project);

// Optionally export models and sequelize instance
export {
  sequelize,
  User,
  Task,
  Project,
  Role
};
