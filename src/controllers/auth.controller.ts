import { Request, Response } from "express";
import { StatusCodes } from "../utils/constant.js";
import users from "../../users.json" assert { type: "json" };
import jwt from "jsonwebtoken";

const login = async (
    req: Request<never, never, { username: string; password: string }, never>,
    res: Response
): Promise<void> => {
    try {
        const { username, password } = req.body;

        if (username === users[0]?.username && password === users[0].password) {
            const token = jwt.sign(
                { userId: users[0].id, username: users[0].username },
                process.env.JWT_SECRET!
            );

            res.status(StatusCodes.Ok200).send({
                user: { id: users[0].id, username: users[0].username },
                token,
            });
            return;
        }

        res.status(StatusCodes.BadRequest400).send({
            msg: "Username or Password is not correct. Try again",
        });
        return;
    } catch (error) {
        res.status(StatusCodes.InternalServerError500).send({ msg: error });
        return;
    }
};

export { login };
