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
import type { User } from './User'

type ProfileAssociations = 'user'

export class Profile extends Model<
  InferAttributes<Profile, { omit: ProfileAssociations }>,
  InferCreationAttributes<Profile, { omit: ProfileAssociations }>
> {
  declare id: CreationOptional<number>
  declare externalId: string
  declare name: string
  declare firstName: string
  declare lastName: string
  declare middleName: string
  declare workEmail: string
  declare workPhone: string
  declare personalPhone: string
  declare personalEmail: string
  declare fax: string
  declare gender: string
  declare isPerson: boolean
  declare workAddress: string
  declare profilePicture: string
  declare createdAt: Date;
  declare updatedAt: Date;

  // Profile hasOne User (as User)
  declare user?: NonAttribute<User>
  declare getUser: HasOneGetAssociationMixin<User>
  declare setUser: HasOneSetAssociationMixin<User, number>
  declare createUser: HasOneCreateAssociationMixin<User>

  declare static associations: {
    user: Association<Profile, User>
  }

  static initModel(sequelize: Sequelize): typeof Profile {
    Profile.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      externalId: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      middleName: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      workEmail: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      workPhone: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      personalPhone: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      personalEmail: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      fax: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      isPerson: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      workAddress: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      profilePicture: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Profile',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'profile',
    })

    return Profile
  }
}
