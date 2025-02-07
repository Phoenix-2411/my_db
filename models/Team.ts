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
import type { TeamUser } from './TeamUser'

type TeamAssociations = 'teamUsers'

export class Team extends Model<
  InferAttributes<Team, { omit: TeamAssociations }>,
  InferCreationAttributes<Team, { omit: TeamAssociations }>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare inspectionTypeId: number
  declare description: string | null
  declare inspectionTypeCode: string
  declare claimType: string
  declare schedulable: boolean
  declare inspectionTypeName: string
  declare createdAt: Date;
  declare updatedAt: Date;

  // Team hasMany TeamUser (as TeamUsers)
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
    teamUsers: Association<Team, TeamUser>
  }

  static initModel(sequelize: Sequelize): typeof Team {
    Team.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      inspectionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255)
      },
      inspectionTypeCode: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      claimType: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      schedulable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      inspectionTypeName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Team',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'team',
    })

    return Team
  }
}
