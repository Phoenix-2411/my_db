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
  Sequelize,
} from 'sequelize';
import type { Role } from './Role';
import type { Team } from './Team';
import type { User } from './User';

type TeamUserAssociations = 'team' | 'user' | 'role';

export class TeamUser extends Model<
  InferAttributes<TeamUser, { omit: TeamUserAssociations }>,
  InferCreationAttributes<TeamUser, { omit: TeamUserAssociations }>
> {
  declare id: CreationOptional<number>;
  declare isActive: boolean;
  declare teamId: number; // Explicit foreign key
  declare userId: number; // Explicit foreign key
  declare roleId: number; // Explicit foreign key
  declare createdAt: Date;
  declare updatedAt: Date;

  // Associations
  declare team?: NonAttribute<Team>;
  declare getTeam: BelongsToGetAssociationMixin<Team>;
  declare setTeam: BelongsToSetAssociationMixin<Team, number>;
  declare createTeam: BelongsToCreateAssociationMixin<Team>;

  declare user?: NonAttribute<User>;
  declare getUser: BelongsToGetAssociationMixin<User>;
  declare setUser: BelongsToSetAssociationMixin<User, number>;
  declare createUser: BelongsToCreateAssociationMixin<User>;

  declare role?: NonAttribute<Role>;
  declare getRole: BelongsToGetAssociationMixin<Role>;
  declare setRole: BelongsToSetAssociationMixin<Role, number>;
  declare createRole: BelongsToCreateAssociationMixin<Role>;

  declare static associations: {
    team: Association<TeamUser, Team>;
    user: Association<TeamUser, User>;
    role: Association<TeamUser, Role>;
  };

  static initModel(sequelize: Sequelize): typeof TeamUser {
    TeamUser.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        teamId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'Team', key: 'id' },
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'User', key: 'id' },
        },
        roleId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: { model: 'Role', key: 'id' },
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'TeamUser',
        schema: 'userservice',
        tableName: 'teamUser',
      }
    );

    return TeamUser;
  }
}
