import { Injectable } from "@nestjs/common";
import { User, Bookmark} from "@prisma/client";

@Injectable({})
export class AuthService {
    signin() {
        return  {msg: 'I am signed in'};
    }

    signup() {
        return { msg: 'I am signed up'};
    }
}