export class Elapsed {

    private static START: number = new Date().getTime();

    private till: Date;

    constructor(till?: Date) {
        this.till = till || new Date();
    }

    time(): Date {
        return new Date(this.till.getTime() - Elapsed.START);
    }
}
