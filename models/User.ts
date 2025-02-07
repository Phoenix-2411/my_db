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
import type { Client } from './Client';
import type { Profile } from './Profile';
import type { Role } from './Role';
import type { TeamUser } from './TeamUser'; // updated here
import type { Attachment } from './Attachment'; // updated here

// updated here: added associations for TeamUser and Attachment
type UserAssociations = 'client' | 'role' | 'profile' | 'teamUsers' | 'attachments';

export class User extends Model<
  InferAttributes<User, { omit: UserAssociations }>,
  InferCreationAttributes<User, { omit: UserAssociations }>
> {
  declare id: CreationOptional<number>;
  declare isActive: boolean;
  declare isFirstLogin: boolean;
  declare isSSOEnabled: boolean;
  declare type: string;
  declare description: string;
  declare clientSpecific: boolean;
  declare clientCode: string;
  declare isDeleted: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;

  // User belongsTo Client (as Client)
  declare client?: NonAttribute<Client>;
  declare getClient: BelongsToGetAssociationMixin<Client>;
  declare setClient: BelongsToSetAssociationMixin<Client, number>;
  declare createClient: BelongsToCreateAssociationMixin<Client>;

  // User belongsTo Role (as Role)
  declare role?: NonAttribute<Role>;
  declare getRole: BelongsToGetAssociationMixin<Role>;
  declare setRole: BelongsToSetAssociationMixin<Role, number>;
  declare createRole: BelongsToCreateAssociationMixin<Role>;

  // User belongsTo Profile (as Profile)
  declare profile?: NonAttribute<Profile>;
  declare getProfile: BelongsToGetAssociationMixin<Profile>;
  declare setProfile: BelongsToSetAssociationMixin<Profile, number>;
  declare createProfile: BelongsToCreateAssociationMixin<Profile>;

  // User hasMany TeamUser (as teamUsers) - updated here
  declare teamUsers?: NonAttribute<TeamUser[]>;

  // User hasMany Attachments (as attachments) - updated here
  declare attachments?: NonAttribute<Attachment[]>;

  declare static associations: {
    client: Association<User, Client>;
    role: Association<User, Role>;
    profile: Association<User, Profile>;
    teamUsers: Association<User, TeamUser>; // updated here
    attachments: Association<User, Attachment>; // updated here
  };

  static initModel(sequelize: Sequelize): typeof User {
    User.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      isFirstLogin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      isSSOEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      clientSpecific: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      clientCode: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    }, {
      sequelize,
      modelName: 'User',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'user', // Table name in your database
      timestamps: true
    });



    return User;
  }
}
