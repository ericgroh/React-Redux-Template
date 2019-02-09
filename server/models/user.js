import bcrypt from "bcrypt";

module.exports = (sequelize, type) => {
    const User = sequelize.define(
        `user`,
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            first_name: type.STRING,
            last_name: type.STRING,
            email: type.STRING,
            password: type.STRING
        },
        {
            defaultScope: {
                attributes: { exclude: [`password`] }
            },
            scopes: {
                withPassword: {
                    attributes: { include: [`password`] }
                }
            },
            hooks: {
                beforeCreate: user => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        }
    );

    User.prototype.validPassword = async function validPassword(password) {
        const test = await bcrypt.compare(password, this.password);
        return test;
    };

    User.prototype.toJSON = function toJSON() {
        let values = Object.assign({}, this.get());

        delete values.password;
        return values;
    };

    return User;
};
