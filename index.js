import express from "express";
import jwt from "jsonwebtoken";
import { connectionMongoDB } from "./db-connect/db-connect.js";
import { registerValidation } from "./validation/auth.js";
import { validationResult } from "express-validator";
import User from "./Models/Users.js";

connectionMongoDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello there 11100011155");
});

app.post("/auth/register/", registerValidation, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const doc = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        avatarUrl: req.body.avatarUrl,
    });

    const user = doc.save();

    res.json(user);
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server is OK");
});
