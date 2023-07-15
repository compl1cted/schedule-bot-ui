import "./reg.css"
import { useState, useContext } from "react";
import { Button } from "../../components/button/button"
import { Input } from "../../components/input/input"
import { IUser } from "../../types/models/user.interface";
import { Context } from "../../main";

export function Reg() {
    const [userData, setUserData] = useState<IUser>({} as IUser);
    const [error, setError] = useState<string>("Complete all fields!");

    const {} = useContext(Context);

    const Submit = async  (e: any) => {
        e.preventDefault();

        // const user = toJS(authStore.user);
        // const date = GetCurrentTime();
        // const newPost = { ...post, User: user, Date: date } as IPost;
        // const response = await postStore.AddPost(newPost);
        // setError(response);

        if (!userData.username || !userData.email || !userData.password) {
            setError("All fields must be completed!");
        }

        
    }

    return (
        <form className="reg-form" onSubmit={Submit}>
            <h2>{error}</h2>
           <Input
                name="username"
                placeholder="Username" type="text"
                onChange={(e: any) => setUserData({...userData, username: e.target.value} as IUser)}
            />
           <Input
                name="email"
                placeholder="Email"
                type="text"
                onChange={(e:any) => setUserData({...userData, email: e.target.value} as IUser)}
           />
           <Input
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e:any) => setUserData({...userData, password: e.target.value} as IUser)}
           />

           <Button text="Register" type="submit"></Button>
        </form>
    )
}