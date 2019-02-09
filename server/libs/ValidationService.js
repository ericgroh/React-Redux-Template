import validator from "validator";
import empty from "is-empty";

export default class UserService {
    constructor() {}

    validateRegisterInput(data) {
        return new Promise(function(resolve) {
            let errors = {};

            data.first_name = !empty(data.first_name) ? data.first_name : ``;
            data.last_name = !empty(data.last_name) ? data.last_name : ``;
            data.email = !empty(data.email) ? data.email : ``;
            data.password = !empty(data.password) ? data.password : ``;
            data.confirm_password = !empty(data.confirm_password)
                ? data.confirm_password
                : ``;

            if (validator.isEmpty(data.first_name)) {
                errors.firts_name = `First name field is required`;
            }

            if (validator.isEmpty(data.last_name)) {
                errors.last_name = `Last name field is required`;
            }

            if (validator.isEmpty(data.email)) {
                errors.email = `Email field is required`;
            } else if (!validator.isEmail(data.email)) {
                errors.email = `Email is invalid`;
            }

            if (validator.isEmpty(data.password)) {
                errors.password = `Password field is required`;
            }
            if (validator.isEmpty(data.confirm_password)) {
                errors.confirm_password = `Confirm password field is required`;
            }
            if (!validator.isLength(data.password, { min: 6, max: 30 })) {
                errors.password = `Password must be at least 6 characters`;
            }
            if (!validator.equals(data.password, data.confirm_password)) {
                errors.confirm_password = `Passwords must match`;
            }

            resolve({
                errors,
                isValid: empty(errors)
            });
        });
    }

    validateLoginInput(data) {
        return new Promise(function(resolve) {
            let errors = {};
            data.email = !empty(data.email) ? data.email : ``;
            data.password = !empty(data.password) ? data.password : ``;

            if (validator.isEmpty(data.email)) {
                errors.email = `Email field is required`;
            } else if (!validator.isEmail(data.email)) {
                errors.email = `Email is invalid`;
            }

            if (validator.isEmpty(data.password)) {
                errors.password = `Password field is required`;
            }
            resolve({
                errors,
                isValid: empty(errors)
            });
        });
    }
}
