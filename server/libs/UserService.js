import { User } from "../sequelize";
import { SECRET_KEY } from "../../config.js";
import jwt from "jsonwebtoken";

export default class UserService {
    constructor() {}

    findByEmail(email) {
        return new Promise(function(resolve, reject) {
            User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (!user) {
                    reject(`No user found.`);
                }

                resolve(user.toJSON());
            });
        });
    }

    findCreate(data) {
        return new Promise(function(resolve, reject) {
            User.findOrCreate({
                where: { email: data.email },
                defaults: {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    password: data.password
                }
            })
                .spread((user, created) => {
                    resolve({ user, created });
                })
                .catch(function(err) {
                    reject(err);
                });
        });
    }

    checkAuthentication(email, password) {
        return new Promise(function(resolve, reject) {
            User.scope(`withPassword`)
                .findOne({
                    where: {
                        email: email
                    }
                })
                .then(user => {
                    if (!user) {
                        reject(`emailnotfound`);
                    }
                    user.validPassword(password).then(valid => {
                        if (!valid) {
                            reject(`passwordincorrect`);
                        } else {
                            const payload = {
                                id: user.id,
                                name: user.first_name
                            };

                            jwt.sign(
                                payload,
                                SECRET_KEY,
                                { expiresIn: 31556926 },
                                (err, token) => {
                                    resolve({
                                        success: true,
                                        token: token
                                    });
                                }
                            );
                        }
                    });
                });
        });
    }
}
