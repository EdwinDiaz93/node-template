import { config } from '../config';
import { Sequelize } from 'sequelize-typescript';

const db = new Sequelize({
    database: config.dbName,
    dialect: config.dbDialect,
    username: config.dbUser,
    password: config.dbPass,
    host: config.dbHost,
    port: config.dbPort,
    define: {
        timestamps: true,
        paranoid: true,
        underscored: true,
    },
});

export default db;