import { body } from "express-validator";

export const registerValidation = [
    body("email", "bad email format").isEmail(),
    body("fullName", "wrong name format").isLength({ min: 3 }),
    body("password", "the lenght is not enough").isLength({ min: 5 }),
    body("avatarUrl", "bad url format").optional().isURL().contains("://"),
];
