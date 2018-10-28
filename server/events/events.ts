import {Request} from 'express';

import {LocalDB} from "../model/localDB";
import {Result} from "../result/result";
import {Options} from "./options";

export class Events implements Result {

    constructor(
        private req: Request,
        private database: LocalDB,
        private options: Options,
        private allowed: Set<string>
    ) {}

    available(): boolean {
        const requested = this.options.types();
        if (requested.size) {
            const unknown = new Set(
                [...requested]
                    .filter(type => !this.allowed.has(type))
            );
            if (unknown.size) {
                return false;
            }
        }
        return true;
    }

    value(): any {
        const page = this.options.page();
        const limit = this.options.limit();
        const requested = this.options.types();
        let result;
        if (requested.size) {
            result = this.database
                .events
                .filter((event) => requested.has(event.type));
        } else {
            result = this.database
                .events
                .slice(limit * (page - 1), (limit * page))
        }
        return {
            events: result
        };
    }
}

