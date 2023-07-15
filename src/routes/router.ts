import { IRoute } from "../types/route";
import { Reg } from "../pages/reg/reg";
import { Log } from "../pages/login/login";
import { AddSchedule } from "../pages/api/add-schedule/add-schedule";

export const PublicRoutes: IRoute[] = [
    { path: "/sign_in", component: Reg },
    { path: "/sign_up", component: Log },
    { path: "/add_schedule", component: AddSchedule }
];

export const PrivateRoutes: IRoute[] = [
    // { path: "/", component: AddPost },
    // { path: "/people", component: People },
    // { path: "/feed", component: Feed },
    // { path: "/users/:id", component: UserPage },
    // { path: "/posts/:id", component: PostPage },
    // { path: "/profile", component: Profile },
];