import {User} from "users";

class App {

    constructor(private port: number) {
    }

    private run() {
        User.fromJson({blah: "Okay"})
    }
}