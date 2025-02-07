import {
  Association,
  CreationOptional,
  DataTypes,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import { Json } from '../types'
import type { User } from './User'

type ClientAssociations = 'user'

export class Client extends Model<
  InferAttributes<Client, { omit: ClientAssociations }>,
  InferCreationAttributes<Client, { omit: ClientAssociations }>
> {
  declare id: CreationOptional<number>
  declare configs: Json
  declare createdAt: Date;
  declare updatedAt: Date;

  // Client hasOne User (as User)
  declare user?: NonAttribute<User>
  declare getUser: HasOneGetAssociationMixin<User>
  declare setUser: HasOneSetAssociationMixin<User, number>
  declare createUser: HasOneCreateAssociationMixin<User>

  declare static associations: {
    user: Association<Client, User>
  }

  static initModel(sequelize: Sequelize): typeof Client {
    Client.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      configs: {
        type: DataTypes.JSONB,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Client',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'client',
    })

    return Client
  }
}
