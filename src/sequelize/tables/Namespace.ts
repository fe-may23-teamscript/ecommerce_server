import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { INamespace } from '../../types/INamespace';

@Table({
  tableName: 'namespaces',
  modelName: 'Namespace',
  timestamps: false,
})
export class Namespace extends Model<INamespace> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  id: string;
}
