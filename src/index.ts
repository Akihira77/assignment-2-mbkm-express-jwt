import "dotenv/config.js";
import "express-async-error";
import express from "express";
import authRoute from "./routes/auth.route.js";
import teacherRoute from "./routes/teacher.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/teacher", teacherRoute);

const startServer = () => {
    const PORT = Number(process.env.PORT || 7000);
    try {
        app.listen(PORT, () => {
            console.log(`Server listening http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startServer();
