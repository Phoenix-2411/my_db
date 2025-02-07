'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ schema: 'userservice', tableName: 'role' },
      [
        {
          id: 5,
          name: 'Admin',
          description: 'Admin Role',
          group: 'IT',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 4,
          name: 'User',
          description: 'User Role',
          group: 'HR',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 3,
          name: 'Guest',
          description: 'Guest Role',
          group: 'Ops',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 6,
          name: 'Manager',
          description: 'Manager Role',
          group: 'HR',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 7,
          name: 'Supervisor',
          description: 'Supervisor Role',
          group: 'IT',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 8,
          name: 'Intern',
          description: 'Intern Role',
          group: 'Ops',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 9,
          name: 'Admin Assistant',
          description: 'Admin Assistant Role',
          group: 'IT',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 10,
          name: 'HR Manager',
          description: 'HR Manager Role',
          group: 'HR',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 11,
          name: 'Operations Lead',
          description: 'Operations Lead Role',
          group: 'Ops',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 12,
          name: 'Finance',
          description: 'Finance Role',
          group: 'Finance',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 13,
          name: 'IT Support',
          description: 'IT Support Role',
          group: 'IT',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 14,
          name: 'Customer Service',
          description: 'Customer Service Role',
          group: 'CS',
          isActive: true,
          policies: JSON.stringify({}),
        },
        {
          id: 15,
          name: 'Operations Staff',
          description: 'Operations Staff Role',
          group: 'Ops',
          isActive: true,
          policies: JSON.stringify({}),
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete({ schema: 'userservice', tableName: 'role' }, {});
  }
};
