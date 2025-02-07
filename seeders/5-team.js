'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ schema: 'userservice', tableName: 'team' },
      [
        {
          "id": 1001,
          "name": "Team A",
          "inspectionTypeId": 201,
          "description": "First Team",
          "inspectionTypeCode": "IT001",
          "claimType": "Type1",
          "schedulable": true,
          "inspectionTypeName": "Inspection A"
        },
        {
          "id": 1002,
          "name": "Team B",
          "inspectionTypeId": 202,
          "description": "Second Team",
          "inspectionTypeCode": "IT002",
          "claimType": "Type2",
          "schedulable": true,
          "inspectionTypeName": "Inspection B"
        },
        {
          "id": 1003,
          "name": "Team C",
          "inspectionTypeId": 203,
          "description": "Third Team",
          "inspectionTypeCode": "IT003",
          "claimType": "Type3",
          "schedulable": false,
          "inspectionTypeName": "Inspection C"
        },
        {
          "id": 1004,
          "name": "Team D",
          "inspectionTypeId": 204,
          "description": "Fourth Team",
          "inspectionTypeCode": "IT004",
          "claimType": "Type4",
          "schedulable": true,
          "inspectionTypeName": "Inspection D"
        },
        {
          "id": 1005,
          "name": "Team E",
          "inspectionTypeId": 205,
          "description": "Fifth Team",
          "inspectionTypeCode": "IT005",
          "claimType": "Type5",
          "schedulable": true,
          "inspectionTypeName": "Inspection E"
        },
        {
          "id": 1006,
          "name": "Team F",
          "inspectionTypeId": 206,
          "description": "Sixth Team",
          "inspectionTypeCode": "IT006",
          "claimType": "Type6",
          "schedulable": false,
          "inspectionTypeName": "Inspection F"
        },
        {
          "id": 1007,
          "name": "Team G",
          "inspectionTypeId": 207,
          "description": "Seventh Team",
          "inspectionTypeCode": "IT007",
          "claimType": "Type7",
          "schedulable": true,
          "inspectionTypeName": "Inspection G"
        },
        {
          "id": 1008,
          "name": "Team H",
          "inspectionTypeId": 208,
          "description": "Eighth Team",
          "inspectionTypeCode": "IT008",
          "claimType": "Type8",
          "schedulable": true,
          "inspectionTypeName": "Inspection H"
        },
        {
          "id": 1009,
          "name": "Team I",
          "inspectionTypeId": 209,
          "description": "Ninth Team",
          "inspectionTypeCode": "IT009",
          "claimType": "Type9",
          "schedulable": false,
          "inspectionTypeName": "Inspection I"
        },
        {
          "id": 1010,
          "name": "Team J",
          "inspectionTypeId": 210,
          "description": "Tenth Team",
          "inspectionTypeCode": "IT010",
          "claimType": "Type10",
          "schedulable": true,
          "inspectionTypeName": "Inspection J"
        },
        {
          "id": 1011,
          "name": "Team K",
          "inspectionTypeId": 211,
          "description": "Eleventh Team",
          "inspectionTypeCode": "IT011",
          "claimType": "Type11",
          "schedulable": true,
          "inspectionTypeName": "Inspection K"
        },
        {
          "id": 1012,
          "name": "Team L",
          "inspectionTypeId": 212,
          "description": "Twelfth Team",
          "inspectionTypeCode": "IT012",
          "claimType": "Type12",
          "schedulable": false,
          "inspectionTypeName": "Inspection L"
        },
        {
          "id": 1013,
          "name": "Team M",
          "inspectionTypeId": 213,
          "description": "Thirteenth Team",
          "inspectionTypeCode": "IT013",
          "claimType": "Type13",
          "schedulable": true,
          "inspectionTypeName": "Inspection M"
        }
      ]

      , {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete({ schema: 'userservice', tableName: 'team' }, {});

  }
};
