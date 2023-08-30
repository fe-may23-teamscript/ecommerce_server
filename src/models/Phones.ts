import {Model, Table, Column} from 'sequelize-typescript';

@Table({
  tableName: 'phones',
  modelName: 'Phones',
  timestamps: false,
})
export class Phones extends Model {
    @Column
      category!: string;

    @Column
      phoneId!: string;

    @Column
      itemId!: string;

    @Column
      name!: string;

    @Column
      screen!: string;

      @Column
        fullPrice!: number;

      @Column
        price!: number;

      @Column
        capacity!: string;

        @Column
          color!: string;

        @Column
          ram!: string;

          @Column
            year!: number;

          @Column
            image!: string;
}
