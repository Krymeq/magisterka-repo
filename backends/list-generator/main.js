import express from "express";
import { generateList } from "./generator.js";
import cors from "cors";

const app = express();
const port = 3456;
app.use(cors());


app.get("/list", (_, res) => {
    const list = generateList();
    res.status(200);
    res.send(list);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

