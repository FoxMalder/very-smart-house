import {Request} from "express";
import {EventFilters} from "../model/eventFilters";
import {LocalDB} from "../model/localDB";

export class Options {

    constructor(
        private req: Request,
        private database: LocalDB
    ) {}

    filter(): EventFilters {
        return this.req.body;
    }

    page(): number {
        return this.filter().page || 1
    };

    limit(): number {
        return this.filter().limit || this.database.events.length;
    }

    types(): Set<string> {
        if (this.filter().type) {
            return new Set<string>(this.filter().type.split(':'))
        }
        return new Set<string>();
    }
}
