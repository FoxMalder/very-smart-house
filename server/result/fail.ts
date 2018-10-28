import {Response} from "express";

import {Error} from "./error";
import {Done} from "./done";

export class Fail implements Done {

    constructor(
        private res: Response,
        private err: Error
    ) {};

    send() {
        this.res
            .status(this.err.status || 500)
            .send('Something broke!')
    }
}
