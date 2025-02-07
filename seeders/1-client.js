module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'userservice', tableName: 'client' },  // Table name
      [
        {
          id: 101,
          configs: JSON.stringify({ setting: 'value1' }),  // Stringify the JSON object
        },
        {
          id: 102,
          configs: JSON.stringify({ setting: 'value2' }),
        },
        {
          id: 103,
          configs: JSON.stringify({ setting: 'value3' }),
        },
        {
          id: 104,
          configs: JSON.stringify({ setting: 'value4' }),
        },
        {
          id: 105,
          configs: JSON.stringify({ setting: 'value5' }),
        },
        {
          id: 106,
          configs: JSON.stringify({ setting: 'value6' }),
        },
        {
          id: 107,
          configs: JSON.stringify({ setting: 'value7' }),
        },
        {
          id: 108,
          configs: JSON.stringify({ setting: 'value8' }),
        },
        {
          id: 109,
          configs: JSON.stringify({ setting: 'value9' }),
        },
        {
          id: 110,
          configs: JSON.stringify({ setting: 'value10' }),
        },
        {
          id: 111,
          configs: JSON.stringify({ setting: 'value11' }),
        },
        {
          id: 112,
          configs: JSON.stringify({ setting: 'value12' }),
        },
        {
          id: 113,
          configs: JSON.stringify({ setting: 'value13' }),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'userservice', tableName: 'client' },  // Table name
      {},
    );
  },
};
