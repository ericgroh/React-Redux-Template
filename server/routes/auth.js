import { Router } from "express";
import UserService from "../libs/UserService.js";
import ValidationService from "../libs/ValidationService.js";

export const auth = Router();
// Initial get everything route
auth.post(`/login`, async (req, res) => {
    try {
        const validation = new ValidationService();
        const users = new UserService();

        const { errors, isValid } = await validation.validateLoginInput(
            req.body
        );

        if (!isValid) {
            console.log(`invalid`);
            return res.status(400).json(errors);
        }

        const { email, password } = req.body;
        const user = await users.checkAuthentication(email, password);
        res.json(user);
    } catch (err) {
        let errors = {};

        if (err == `emailnotfound`) {
            errors.emailnotfound = `Email not found.`;
        }
        if (err == `passwordincorrect`) {
            errors.passwordincorrect = `Incorrect password.`;
        }
        res.status(400).json(errors);
    }
});

auth.post(`/register`, async (req, res) => {
    try {
        const validation = new ValidationService();
        const users = new UserService();

        const { errors, isValid } = await validation.validateRegisterInput(
            req.body
        );

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const { user, created } = await users.findCreate(req.body);

        if (!created) {
            errors.email = `Email already exists`;
            return res.status(400).json(errors);
        }

        res.json(user);
    } catch (err) {
        res.send({ error: err });
    }
});
