import { Sequelize } from 'sequelize';
import { User } from './User';
import { Profile } from './Profile';
import { Client } from './Client';
import { Role } from './Role';
import { TeamUser } from './TeamUser';
import { Team } from './Team';
import { Attachment } from './Attachment';

export {
  User,
  Profile,
  Client,
  Role,
  TeamUser,
  Team,
  Attachment
};

export function initModels(sequelize: Sequelize) {
  User.initModel(sequelize);
  Profile.initModel(sequelize);
  Client.initModel(sequelize);
  Role.initModel(sequelize);
  TeamUser.initModel(sequelize);
  Team.initModel(sequelize);
  Attachment.initModel(sequelize);

  // Associations
  User.belongsTo(Client, { as: 'client', foreignKey: 'clientId' });
  User.belongsTo(Role, { as: 'groupRole', foreignKey: 'roleId' });
  User.belongsTo(Profile, { as: 'profile', foreignKey: 'profileId' });
  User.hasMany(TeamUser, { as: 'teamUsers', foreignKey: 'userId' });
  User.belongsToMany(Team, { through: TeamUser, as: 'team', foreignKey: 'userId' }); // New
  User.hasMany(Attachment, { as: 'attachments', foreignKey: 'userId' });


  Profile.hasOne(User, { as: 'user', foreignKey: 'profileId' });
  Client.hasOne(User, { as: 'user', foreignKey: 'clientId' });
  Role.hasMany(User, { as: 'users', foreignKey: 'roleId' });
  Role.hasMany(TeamUser, { as: 'teamUsers', foreignKey: 'roleId' });

  TeamUser.belongsTo(Team, { as: 'team', foreignKey: 'teamId' });
  TeamUser.belongsTo(User, { as: 'user', foreignKey: 'userId' });
  TeamUser.belongsTo(Role, { as: 'role', foreignKey: 'roleId' });

  Team.hasMany(TeamUser, { as: 'teamUsers', foreignKey: 'teamId' });
  Team.belongsToMany(User, { through: TeamUser, as: 'users', foreignKey: 'teamId' }); // New

  Attachment.belongsTo(User, { as: 'user', foreignKey: 'userId' });

  return {
    User,
    Profile,
    Client,
    Role,
    TeamUser,
    Team,
    Attachment
  };
}
