'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ schema: 'userservice', tableName: 'teamUser' },
      [
        {
          "id": 1,
          "teamId": 1001,
          "userId": 1,
          "roleId": 5,
          "isActive": true
        },
        {
          "id": 2,
          "teamId": 1002,
          "userId": 2,
          "roleId": 4,
          "isActive": true
        },
        {
          "id": 3,
          "teamId": 1003,
          "userId": 3,
          "roleId": 3,
          "isActive": true
        },
        {
          "id": 4,
          "teamId": 1004,
          "userId": 4,
          "roleId": 6,
          "isActive": true
        },
        {
          "id": 5,
          "teamId": 1005,
          "userId": 5,
          "roleId": 7,
          "isActive": true
        },
        {
          "id": 6,
          "teamId": 1006,
          "userId": 6,
          "roleId": 8,
          "isActive": true
        },
        {
          "id": 7,
          "teamId": 1007,
          "userId": 7,
          "roleId": 6,
          "isActive": true
        },
        {
          "id": 8,
          "teamId": 1008,
          "userId": 8,
          "roleId": 7,
          "isActive": true
        },
        {
          "id": 9,
          "teamId": 1009,
          "userId": 9,
          "roleId": 8,
          "isActive": true
        },
        {
          "id": 10,
          "teamId": 1010,
          "userId": 10,
          "roleId": 6,
          "isActive": true
        },
        {
          "id": 11,
          "teamId": 1011,
          "userId": 11,
          "roleId": 7,
          "isActive": true
        },
        {
          "id": 12,
          "teamId": 1012,
          "userId": 12,
          "roleId": 8,
          "isActive": true
        },
        {
          "id": 13,
          "teamId": 1013,
          "userId": 13,
          "roleId": 6,
          "isActive": true
        }
      ]
      , {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete({ schema: 'userservice', tableName: 'teamUser' }, {});

  }
};
