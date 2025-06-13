import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Project from './projects';

@Table
class Task extends Model {
  @Column
  title!: string;

  @Column
  description!: string;

  @ForeignKey(() => Project)
  @Column
  projectId!: number;

  @BelongsTo(() => Project)
  project!: Project;
}

export default Task;