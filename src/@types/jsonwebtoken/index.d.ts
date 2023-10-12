import jwt from "jsonwebtoken";

declare module "jsonwebtoken" {
    interface AuthJwtPayload extends jwt.JwtPayload {
        id: string;
        username: string;
    }
    interface JwtPayload {
        id: string;
        username: string;
    }
}
