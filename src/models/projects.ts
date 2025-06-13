import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import Task from './tasks';

@Table
class Project extends Model {
  @Column
  name!: string;

  @Column
  description!: string;

  @HasMany(() => Task)
  tasks!: Task[];
}

export default Project;