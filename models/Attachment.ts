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
import type { User } from './User'

type AttachmentAssociations = 'user'

export class Attachment extends Model<
  InferAttributes<Attachment, { omit: AttachmentAssociations }>,
  InferCreationAttributes<Attachment, { omit: AttachmentAssociations }>
> {
  declare id: CreationOptional<number>
  declare type: string
  declare mimeType: string
  declare title: string
  declare description: string
  declare active: boolean
  declare deleted: boolean
  declare createdBy: string
  declare updatedBy: string
  declare createdAt: Date;
  declare updatedAt: Date;

  // Attachment belongsTo User (as User)
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>

  declare static associations: {
    user: Association<Attachment, User>
  }

  static initModel(sequelize: Sequelize): typeof Attachment {
    Attachment.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      mimeType: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdBy: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      updatedBy: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Attachment',
      schema: 'userservice', // Set the schema name explicitly
      tableName: 'attachments',
    })

    return Attachment
  }
}
