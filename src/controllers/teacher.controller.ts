import { Request, Response } from "express";
import teachers from "../../teachers.json" assert { type: "json" };
import { StatusCodes } from "../utils/constant.js";

const getAllTeacher = async (req: Request, res: Response) => {
    try {
        res.status(StatusCodes.Ok200).send({ teachers });
        return;
    } catch (error) {
        res.status(StatusCodes.InternalServerError500).send({ msg: error });
        return;
    }
};

export { getAllTeacher };
