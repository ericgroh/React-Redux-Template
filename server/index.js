import express from "express";
import bodyParser from "body-parser";
import { ENV, PORT } from "../config.js";
import { users } from "./routes/user.js";
import { auth } from "./routes/auth.js";
import passport from "passport";

let server = express();
server.use(function(req, res, next) {
    res.setHeader(`Access-Control-Allow-Origin`, `http://localhost:3000`);
    res.setHeader(
        `Access-Control-Allow-Methods`,
        `POST,GET,OPTIONS,PUT,DELETE`
    );
    res.setHeader(`Access-Control-Allow-Headers`, `Content-Type,Accept`);
    next();
});
server.use(bodyParser.json());

server.use(passport.initialize());
require(`./config/passport`)(passport);

server.use(`/api/users`, users);
server.use(`/api/auth`, auth);

server.get(`/ping`, async (req, res) => {
    res.send(`pong`);
});

server.listen(
    PORT,
    () => console.log(`App listening on port ` + PORT + ` in ` + ENV + ` mode!`) // eslint-disable-line
);
