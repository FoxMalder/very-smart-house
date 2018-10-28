import {Result} from "../result/result";
import {Elapsed} from "./elapsed";

export class Formatted implements Result {

    constructor(private elapsed: Elapsed) {}

    available(): boolean {
        return true;
    }

    value(): any {
        return {
            "elapsed": this.elapsed
                .time()
                .toLocaleTimeString('ru-RU', {timeZone: 'UTC'})
        };
    }
}
