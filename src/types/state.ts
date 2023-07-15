import { AuthStore } from "../store/auth.store";
import { UserStore } from "../store/user.store";

export interface State {
    authStore: AuthStore;
    userStore: UserStore;
}