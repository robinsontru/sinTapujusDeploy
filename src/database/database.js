import { Sequelize } from "sequelize";
import { URL_DB_CONNECT } from "../config/config.js";

export const sequelize = new Sequelize(URL_DB_CONNECT);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();
