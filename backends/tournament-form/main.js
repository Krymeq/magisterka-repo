import express from "express";
import cors from "cors";
import { disciplines } from "./disciplines.js";
import { generateTournaments } from "./tournaments.js";

const app = express();
const port = 3456;
const tournaments = generateTournaments(1000);
const pageSize = 10;

app.use(cors());

app.get("/disciplines", (_, res) => {
    res.status(200);
    res.send(disciplines);
})

app.get("/disciplines/:disciplineId/tournaments/", (req, res) => {
    const disciplineId = parseInt(req.params.disciplineId);
    const page = parseInt(req.query.page, 10) || 1;
    const disciplineTournaments = tournaments.filter(tournament => tournament.disciplineId === disciplineId);
    const count = disciplineTournaments.length;
    const paginationObj = {
        page, count, maxPage: Math.ceil(count / pageSize)
    }
    res.send({
        tournaments: disciplineTournaments.slice((page - 1) * pageSize, page * pageSize),
        pagination: paginationObj,
    });
})

app.post("/form", (_, res) => res.send(200));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
