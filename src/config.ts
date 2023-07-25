import * as dotenv from 'dotenv';

dotenv.config({
    path: '${__dirname}/../.env',
});

enum dialect {
    mysql = 'mysql',
    postgres = 'postgres',
    sqlite = 'sqlite',
    mariadb = 'mariadb',
    mssql = 'mssql',
    db2 = 'db2',
    snowflake = 'snowflake',
    oracle = 'oracle',
}

const port = Number(process.env.PORT) || 3000;
const dbUser = String(process.env.DB_USER) || 'postgres';
const dbPass = String(process.env.DB_PASSWORD) || 'postgres';
const dbName = String(process.env.DB_NAME) || 'postgres';
const dbPort = Number(process.env.DB_PORT) || 5432;
const dbHost = String(process.env.DB_HOST) || 'localhost';
const jwtSecret = process.env.JWT_SECRET;

const dbDialect = dialect.postgres;

export const config = {
    port,
    dbUser,
    dbPass,
    dbName,
    dbPort,
    dbHost,
    dbDialect,
    jwtSecret,
}

