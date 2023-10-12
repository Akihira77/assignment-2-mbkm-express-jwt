import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../utils/constant.js";
import jwt from "jsonwebtoken";
import users from "../../users.json" assert { type: "json" };

const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            res.status(StatusCodes.Unauthorized401).send({
                msg: "Invalid Credentials",
            });
            return;
        }

        const token = authHeader.split(" ")[1];
        console.log(token);

        const payload = <jwt.JwtPayload>(
            jwt.verify(token!, process.env.JWT_SECRET!)
        );

        if (payload.username !== users[0]?.username) {
            res.status(StatusCodes.Unauthorized401).send({
                msg: "Invalid Credentials",
            });
            return;
        }

        next();
    } catch (error) {
        res.status(StatusCodes.Unauthorized401).send({ msg: error });
        return;
    }
};

export default authMiddleware;
