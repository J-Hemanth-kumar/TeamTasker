import { Sequelize } from 'sequelize-typescript';
import User from '../models/users';
import Role from '../models/role';
import Project from '../models/projects';
import Task from '../models/tasks';

const sequelize = new Sequelize({
  database: 'teamtasker_db',
  dialect: 'postgres',
  username: 'postgres', // Change if needed
  password: 'Hemanth@2002', // Replace with your actual password
  host: 'localhost',
  port: 5432,
  models: [User, Role, Project, Task],
});

export default sequelize;