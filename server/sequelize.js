import Sequelize from "sequelize";
import UserModel from "./models/user";
import {
    ADMIN_FIRST_NAME,
    ADMIN_LAST_NAME,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD
} from "../config";

const sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    {
        host: DATABASE_HOST,
        dialect: `postgres`,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export const User = UserModel(sequelize, Sequelize);

sequelize
    .sync({ force: false }) // set to true to clear database
    .then(() => {
        return User.findOrCreate({
            where: { email: ADMIN_EMAIL },
            defaults: {
                first_name: ADMIN_FIRST_NAME,
                last_name: ADMIN_LAST_NAME,
                email: ADMIN_EMAIL,
                password: ADMIN_PASSWORD
            }
        });
    });
