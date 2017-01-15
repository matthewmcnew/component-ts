import {User} from "users/src";

class App {

    constructor(private port: number) {
    }

    private run() {
        User.fromJson({blah: "Okay"})
    }
}