import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import { Json } from '../types'
import type { TeamUser } from './TeamUser'
import type { User } from './User'

type RoleAssociations = 'users' | 'teamUsers'

export class Role extends Model<
  InferAttributes<Role, { omit: RoleAssociations }>,
  InferCreationAttributes<Role, { omit: RoleAssociations }>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare description: string
  declare group: string
  declare isActive: boolean
  declare policies: Json
  declare createdAt: Date;
  declare updatedAt: Date;

  // Role hasMany User (as Users)
  declare users?: NonAttribute<User[]>
  declare getUsers: HasManyGetAssociationsMixin<User>
  declare setUsers: HasManySetAssociationsMixin<User, number>
  declare addUser: HasManyAddAssociationMixin<User, number>
  declare addUsers: HasManyAddAssociationsMixin<User, number>
  declare createUser: HasManyCreateAssociationMixin<User>
  declare removeUser: HasManyRemoveAssociationMixin<User, number>
  declare removeUsers: HasManyRemoveAssociationsMixin<User, number>
  declare hasUser: HasManyHasAssociationMixin<User, number>
  declare hasUsers: HasManyHasAssociationsMixin<User, number>
  declare countUsers: HasManyCountAssociationsMixin

  // Role hasMany TeamUser (as TeamUsers)
  declare teamUsers?: NonAttribute<TeamUser[]>
  declare getTeamUsers: HasManyGetAssociationsMixin<TeamUser>
  declare setTeamUsers: HasManySetAssociationsMixin<TeamUser, number>
  declare addTeamUser: HasManyAddAssociationMixin<TeamUser, number>
  declare addTeamUsers: HasManyAddAssociationsMixin<TeamUser, number>
  declare createTeamUser: HasManyCreateAssociationMixin<TeamUser>
  declare removeTeamUser: HasManyRemoveAssociationMixin<TeamUser, number>
  declare removeTeamUsers: HasManyRemoveAssociationsMixin<TeamUser, number>
  declare hasTeamUser: HasManyHasAssociationMixin<TeamUser, number>
  declare hasTeamUsers: HasManyHasAssociationsMixin<TeamUser, number>
  declare countTeamUsers: HasManyCountAssociationsMixin

  declare static associations: {
    users: Association<Role, User>,
    teamUsers: Association<Role, TeamUser>
  }

  static initModel(sequelize: Sequelize): typeof Role {
    Role.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      group: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      policies: {
        type: DataTypes.JSONB,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Role',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'role',
    })

    return Role
  }
}
