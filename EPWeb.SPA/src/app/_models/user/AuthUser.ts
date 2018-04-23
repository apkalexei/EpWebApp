import { User } from "./User";

export interface AuthUser {
    tokenString: string;
    user: User;
    roles: string[];
}
