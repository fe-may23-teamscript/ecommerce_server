import { Optional } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ProductAttributes } from '../types/Product';

export interface ProductCreationAttributes
  extends Optional<ProductAttributes, 'id'> {}

@Table({
  tableName: 'products',
  modelName: 'Product',
  underscored: true,
})
export class Product extends Model<
  ProductAttributes,
  ProductCreationAttributes
> {
  @Column
  slug: string;

  @Column
  namespaceId: string;

  @Column
  name: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  capacityAvailable: string[];

  @Column
  capacity: string;

  @Column
  priceRegular: number;

  @Column
  priceDiscount: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  colorsAvailable: string[];

  @Column
  color: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  images: string[];

  @Column({
    type: DataType.JSONB,
  })
  description: string; // stringified JSON

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

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  cell: string[];

  @Column
  category: string;

  @Column
  year: number;

  @Column
  mainImage: string;
}
