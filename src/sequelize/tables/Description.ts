import {
  Model,
  Table,
  Column,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { IDescription } from '../../models/IDescription';
import { PhoneModel } from './PhoneModel';

@Table({
  tableName: 'descriptions',
  modelName: 'Description',
  timestamps: false,
})
export class Description extends Model<IDescription> {
  @Column
  title: string;

  @Column(DataType.ARRAY(DataType.TEXT))
  text: string[];

  @ForeignKey(() => PhoneModel)
  @Column({
    field: 'phone_id',
  })
  phoneId: string;

  @BelongsTo(() => PhoneModel)
  phone: PhoneModel;
}
