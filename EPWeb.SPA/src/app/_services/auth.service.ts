import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    currentUser: any;
    userToken: any;
    decodedToken: any;

    constructor() { }

    login(model: any) {

        // API Call => const user = response.json ();
        const user = {
            tokenString: "some_random_jwt_token_returned_from_api",
            user: {
                username: model.username,
                id: "2"
            }
        }
        if (user) {

            localStorage.setItem("token", user.tokenString);
            localStorage.setItem("user", JSON.stringify(user.user));
            this.decodedToken = user.tokenString; // this will contain decoded JWT token
            this.currentUser = user.user;
            this.userToken = user.tokenString;
        }
        console.log(this.currentUser);
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        if (token)
            return true;
        return false;
    }

}