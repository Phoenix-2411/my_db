const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint({ tableName: 'user', schema: 'userservice' }, {
      fields: ['clientId'],
      type: 'foreign key',
      name: 'users_client_id_fkey',
      references: {
        table: { tableName: 'client', schema: 'userservice' },
        schema: 'userservice',
        field: 'id'
      }
    })

    await queryInterface.addConstraint({ tableName: 'user', schema: 'userservice' }, {
      fields: ['roleId'],
      type: 'foreign key',
      name: 'users_role_id_fkey',
      references: {
        table: { tableName: 'role', schema: 'userservice' },
        field: 'id'
      }
    })

    await queryInterface.addConstraint({ tableName: 'user', schema: 'userservice' }, {
      fields: ['profileId'],
      type: 'foreign key',
      name: 'users_profile_id_fkey',
      references: {
        table: { tableName: 'profile', schema: 'userservice' },
        field: 'id'
      }
    })

    await queryInterface.addConstraint({ tableName: 'teamUser', schema: 'userservice' }, {
      fields: ['teamId'],
      type: 'foreign key',
      name: 'team_users_team_id_fkey',
      references: {
        table: { tableName: 'team', schema: 'userservice' },
        field: 'id'
      }
    })

    await queryInterface.addConstraint({ tableName: 'teamUser', schema: 'userservice' }, {
      fields: ['userId'],
      type: 'foreign key',
      name: 'team_users_user_id_fkey',
      references: {
        table: { tableName: 'user', schema: 'userservice' },
        field: 'id'
      }
    })

    await queryInterface.addConstraint({ tableName: 'teamUser', schema: 'userservice' }, {
      fields: ['roleId'],
      type: 'foreign key',
      name: 'team_users_role_id_fkey',
      references: {
        table: { tableName: 'role', schema: 'userservice' },
        field: 'id'
      }
    })

    await queryInterface.addConstraint({ tableName: 'attachments', schema: 'userservice' }, {
      fields: ['userId'],
      type: 'foreign key',
      name: 'attachments_user_id_fkey',
      references: {
        table: { tableName: 'user', schema: 'userservice' },
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint({ tableName: 'user', schema: 'userservice' }, 'users_client_id_fkey')
    await queryInterface.removeConstraint({ tableName: 'user', schema: 'userservice' }, 'users_role_id_fkey')
    await queryInterface.removeConstraint({ tableName: 'user', schema: 'userservice' }, 'users_profile_id_fkey')
    await queryInterface.removeConstraint({ tableName: 'teamUser', schema: 'userservice' }, 'team_users_team_id_fkey')
    await queryInterface.removeConstraint({ tableName: 'teamUser', schema: 'userservice' }, 'team_users_user_id_fkey')
    await queryInterface.removeConstraint({ tableName: 'teamUser', schema: 'userservice' }, 'team_users_role_id_fkey')
    await queryInterface.removeConstraint({ tableName: 'attachments', schema: 'userservice' }, 'attachments_user_id_fkey')
  }
};