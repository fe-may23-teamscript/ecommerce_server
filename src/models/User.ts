import { Optional } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';
import { UserAttributes } from '../types/User';

export interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> { }

@Table({
  tableName: 'users',
  modelName: 'User',
  underscored: true,
})
export class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    allowNull: false,
    unique: true
  })
  username: string;

  @Column({
    allowNull: false,
  })
  password: string;
}
