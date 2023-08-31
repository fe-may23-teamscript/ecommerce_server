import { Optional } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

interface PhoneAttributes {
  id: number;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface PhoneCreationAttributes
  extends Optional<PhoneAttributes, 'id'> {}

@Table({
  tableName: 'phones',
  modelName: 'Phone',
  timestamps: false,
})
export class Phone extends Model<PhoneAttributes, PhoneCreationAttributes> {
  @Column
  category: string;

  @Column
  phoneId: string;

  @Column
  itemId: string;

  @Column
  name: string;

  @Column
  fullPrice: number;

  @Column
  price: number;

  @Column
  screen: string;

  @Column
  capacity: string;

  @Column
  color: string;

  @Column
  ram: string;

  @Column
  year: number;

  @Column
  image: string;
}
