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
} from 'sequelize';
import type { Role } from './Role';
import type { Team } from './Team';
import type { User } from './User'; // updated here

// corrected TeamUserAssociations to include User explicitly
type TeamUserAssociations = 'team' | 'user' | 'role'; // updated here

export class TeamUser extends Model<
  InferAttributes<TeamUser, { omit: TeamUserAssociations }>,
  InferCreationAttributes<TeamUser, { omit: TeamUserAssociations }>
> {
  declare id: CreationOptional<number>;
  declare isActive: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;

  // TeamUser belongsTo Team (as Team)
  declare team?: NonAttribute<Team>;
  declare getTeam: BelongsToGetAssociationMixin<Team>;
  declare setTeam: BelongsToSetAssociationMixin<Team, number>;
  declare createTeam: BelongsToCreateAssociationMixin<Team>;

  // TeamUser belongsTo User (as User) // updated here
  declare user?: NonAttribute<User>; // updated here
  declare getUser: BelongsToGetAssociationMixin<User>; // updated here
  declare setUser: BelongsToSetAssociationMixin<User, number>; // updated here
  declare createUser: BelongsToCreateAssociationMixin<User>; // updated here

  // TeamUser belongsTo Role (as Role)
  declare role?: NonAttribute<Role>;
  declare getRole: BelongsToGetAssociationMixin<Role>;
  declare setRole: BelongsToSetAssociationMixin<Role, number>;
  declare createRole: BelongsToCreateAssociationMixin<Role>;

  declare static associations: {
    team: Association<TeamUser, Team>;
    user: Association<TeamUser, User>; // updated here
    role: Association<TeamUser, Role>;
  };

  static initModel(sequelize: Sequelize): typeof TeamUser {
    TeamUser.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'TeamUser',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'teamUser',
    });

    return TeamUser;
  }
}
