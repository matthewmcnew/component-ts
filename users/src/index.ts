export interface UserJSON {
    blah: string;
}

export class User {

    static fromJson(userJSON: UserJSON): User {
        return new User(userJSON.blah);
    }

    constructor(private blah: string) {

    }
}
