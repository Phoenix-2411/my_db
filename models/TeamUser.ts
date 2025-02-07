import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Role } from './Role'
import type { Team } from './Team'

type TeamUserAssociations = 'team' | 'user' | 'role'

export class TeamUser extends Model<
  InferAttributes<TeamUser, { omit: TeamUserAssociations }>,
  InferCreationAttributes<TeamUser, { omit: TeamUserAssociations }>
> {
  declare id: CreationOptional<number>
  declare isActive: boolean
  declare createdAt: Date;
  declare updatedAt: Date;

  // TeamUser belongsTo Team (as Team)
  declare team?: NonAttribute<Team>
  declare getTeam: BelongsToGetAssociationMixin<Team>
  declare setTeam: BelongsToSetAssociationMixin<Team, number>
  declare createTeam: BelongsToCreateAssociationMixin<Team>

  // TeamUser belongsTo TeamUser (as User)
  declare user?: NonAttribute<TeamUser>
  declare getUser: BelongsToGetAssociationMixin<TeamUser>
  declare setUser: BelongsToSetAssociationMixin<TeamUser, number>
  declare createUser: BelongsToCreateAssociationMixin<TeamUser>

  // TeamUser belongsTo Role (as Role)
  declare role?: NonAttribute<Role>
  declare getRole: BelongsToGetAssociationMixin<Role>
  declare setRole: BelongsToSetAssociationMixin<Role, number>
  declare createRole: BelongsToCreateAssociationMixin<Role>

  declare static associations: {
    team: Association<TeamUser, Team>,
    user: Association<TeamUser, TeamUser>,
    role: Association<TeamUser, Role>
  }

  static initModel(sequelize: Sequelize): typeof TeamUser {
    TeamUser.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'TeamUser',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'teamUser',
    })

    return TeamUser
  }
}
