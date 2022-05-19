import { Injectable } from "@nestjs/common";
import { User, Bookmark} from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dtos";
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    signin() {
        return  {msg: 'I am signed in'};
    }

    async signup(dto: AuthDto) {
        //generate password hash
        const hash = await argon.hash(dto.password);
        //save the new user credentials
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            }
        });

        //return saved user
        return user;
    }
}