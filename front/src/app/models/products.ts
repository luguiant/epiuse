export class Products {
    constructor(
        public id: number,
        public value: number,
        public quantity: number,
        public description: string,
        public name: string,
        public status: number,
        public token: string
    ) {}
}