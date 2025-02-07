const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profile', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      externalId: {
        type: DataTypes.STRING(50),
        field: 'externalId',
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING(50),
        field: 'firstName',
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING(50),
        field: 'lastName',
        allowNull: false
      },
      middleName: {
        type: DataTypes.STRING(50),
        field: 'middleName',
        allowNull: false
      },
      workEmail: {
        type: DataTypes.STRING(100),
        field: 'workEmail',
        allowNull: false
      },
      workPhone: {
        type: DataTypes.STRING(20),
        field: 'workPhone',
        allowNull: false
      },
      personalPhone: {
        type: DataTypes.STRING(20),
        field: 'personalPhone',
        allowNull: false
      },
      personalEmail: {
        type: DataTypes.STRING(100),
        field: 'personalEmail',
        allowNull: false
      },
      fax: {
        type: DataTypes.STRING(50),
        field: 'fax',
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING(10),
        field: 'gender',
        allowNull: false
      },
      isPerson: {
        type: DataTypes.BOOLEAN,
        field: 'isPerson',
        allowNull: false
      },
      workAddress: {
        type: DataTypes.STRING(255),
        field: 'workAddress',
        allowNull: false
      },
      profilePicture: {
        type: DataTypes.STRING(255),
        field: 'profilePicture',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    }, {
      schema: 'userservice',
      timestamps: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: 'profile',
      schema: 'userservice',
    });
  },
};