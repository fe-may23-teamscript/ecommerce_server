import { Optional } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';
import { PhoneAttributes } from '../types/Phone';

export interface PhoneCreationAttributes
  extends Optional<PhoneAttributes, 'id'> {}

@Table({
  tableName: 'phones',
  modelName: 'Phone',
})
export class Phone extends Model<PhoneAttributes, PhoneCreationAttributes> {
  @Column
  slug: string;

  @Column
  namespaceId: string;

  @Column
  name: string;

  @Column
  capacityAvailable: string[];

  @Column
  capacity: string;

  @Column
  priceRegular: number;

  @Column
  priceDiscount: number;

  @Column
  colorsAvailable: string[];

  @Column
  color: string;

  @Column
  images: string[];

  @Column
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

  @Column
  cell: string[];

  @Column
  category: string;

  @Column
  year: number;

  @Column
  mainImage: string;
}
