import {Response} from "express";

import {Done} from "./done";

export class NotFound implements Done {

    constructor(private res: Response) {}

    send() {
        this.res
            .type('text/html')
            .status(404)
            .send('<h1>Page not found</h1>');
    }
}
