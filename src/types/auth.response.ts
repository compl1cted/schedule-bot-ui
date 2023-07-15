import { IUser } from "./models/user.interface";

export interface AuthResponse {
    AccessToken: string;
    RefreshToken: string;
    User: IUser;
}