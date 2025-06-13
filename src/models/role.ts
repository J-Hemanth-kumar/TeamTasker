import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import User from './users';

@Table
class Role extends Model {
  @Column
  name!: string;

  @HasMany(() => User)
  users!: User[];
}

export default Role;