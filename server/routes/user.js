import { Router } from "express";
import { User } from "../sequelize";

export const users = Router();
// Initial get everything route
users.get(`/`, async (req, res) => {
    User.findAll().then(users => res.json(users));
});
