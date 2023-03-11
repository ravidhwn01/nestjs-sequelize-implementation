import { Column, Model, Table } from "sequelize-typescript";

@Table
export class TestSchema extends Model{
    @Column
    name:string
    

}