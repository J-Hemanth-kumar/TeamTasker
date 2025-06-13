import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Role from './role';

@Table
class User extends Model {
  @Column
  name!: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @ForeignKey(() => Role)
  @Column
  roleId!: number;

  @BelongsTo(() => Role)
  role!: Role;
}

export default User;