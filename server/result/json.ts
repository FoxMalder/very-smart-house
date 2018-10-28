import {Response} from "express";

import {Result} from "./result";
import {Done} from "./done";

export class Json implements Done {

    constructor(
        private res: Response,
        private code: Result
    ) {}

    send() {
        if (this.code.available()) {
            this.res
                .status(200)
                .json(this.code.value())
        } else {
            this.res
                .status(400)
                .send(`Incorrect Params`);
        }
    }
}
