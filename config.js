import dotenv from "dotenv";
dotenv.config();

export const ENV = process.env.NODE_ENV || `development`;
export const PORT = process.env.PORT || 4000;
export const SECRET_KEY = process.env.SECRET_KEY || `secret`;
export const ADMIN_FIRST_NAME = process.env.ADMIN_FIRST_NAME;
export const ADMIN_LAST_NAME = process.env.ADMIN_LAST_NAME;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
