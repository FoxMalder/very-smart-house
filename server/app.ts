import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {NotFound} from "./result/notFound";
import {Error} from "./result/error";
import {Fail} from "./result/fail";
import {Json} from "./result/json";

import {Formatted} from "./status/formatted";
import {Elapsed} from "./status/elapsed";

import {Events} from './events/events';
import {LocalDB} from "./model/localDB";
import fs from "fs";
import {Options} from "./events/options";

const app = express();
const port = 8000;

const database: LocalDB = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

const types: Set<string> = new Set(
    database.events.map(event => event.type)
);

app.use(bodyParser.json());
app.use(cors());

app.use('/status', (req: Request, res: Response) => {
    new Json(
        res,
        new Formatted(
            new Elapsed()
        )
    ).send();
});

app.use('/api/events', (req: Request, res: Response) => {
    new Json(
        res,
        new Events(
            req,
            database,
            new Options(
                req,
                database
            ),
            types
        )
    ).send();
});

app.use((req: Request, res: Response) => {
    new NotFound(
        res
    ).send();
});

app.use((err: Error, req: Request, res: Response) => {
    new Fail(
        res,
        err
    ).send();
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
