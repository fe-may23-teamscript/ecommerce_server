import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IPhone } from '../../types/IPhone';
import { PhoneModel } from './PhoneModel';

@Table({
  tableName: 'phones',
  modelName: 'Phone',
  timestamps: false,
})
export class Phone extends Model<IPhone> {
  @Column({
    field: 'id',
    primaryKey: true,
  })
  id: string;

  @Column({
    field: 'category',
  })
  category: string;

  @ForeignKey(() => PhoneModel)
  @Column({
    field: 'phone_id',
  })
  phoneId: string;

  @BelongsTo(() => PhoneModel, { onDelete: 'cascade' })
  public model: PhoneModel;

  @Column({
    field: 'item_id',
  })
  itemId: string;

  @Column({
    field: 'name',
  })
  name: string;

  @Column({
    field: 'full_price',
  })
  fullPrice: number;

  @Column({
    field: 'price',
  })
  price: number;

  @Column({
    field: 'screen',
  })
  screen: string;

  @Column({
    field: 'capacity',
  })
  capacity: string;

  @Column({
    field: 'color',
  })
  color: string;

  @Column({
    field: 'ram',
  })
  ram: string;

  @Column({
    field: 'year',
  })
  year: number;

  @Column({
    field: 'image',
  })
  image: string;
}
