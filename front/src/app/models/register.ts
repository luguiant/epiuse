export class Register {
    constructor(
        public name: string,
        public email: string,
        public email_confirmation: string,
        public password: string,
        public password_confirmation: string,
        public lastname: string,
    ) {}
}