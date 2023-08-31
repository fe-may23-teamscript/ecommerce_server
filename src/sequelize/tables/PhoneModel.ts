import {
  Model,
  Table,
  Column,
  HasMany,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { IPhoneModel } from '../../types/IPhoneModel';
import { Description } from './Description';
import { Namespace } from './Namespace';

@Table({
  tableName: 'models',
  modelName: 'Model',
  timestamps: false,
})
export class PhoneModel extends Model<IPhoneModel> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
    id: string;

  @ForeignKey(() => Namespace)
  @Column({
    field: 'namespace_id',
  })
    namespaceId: string;

  @Column
    name: string;

  @Column
    capacity: string;

  @Column({
    field: 'price_regular',
  })
    priceRegular: number;

  @Column({
    field: 'price_discount',
  })
    priceDiscount: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    field: 'colors_available',
  })
    colorsAvailable: string[];

  @Column
    color: string;

  @Column(DataType.ARRAY(DataType.STRING))
    images: string[];

  @HasMany(() => Description)
    description: Description[];

  @Column
    screen: string;

  @Column
    resolution: string;

  @Column
    processor: string;

  @Column
    ram: string;

  @Column
    camera: string;

  @Column
    zoom: string;

  @Column
    cell: string;
}
