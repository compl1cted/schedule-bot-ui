import "./add-schedule.css"
import { useState } from "react";
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";

export const AddSchedule = () => {
    const [name, setName] = useState<string>("");

    const handleSubmit = async (e: any) => {
        e.preventDefaults();

        console.log(name);
    }

    return (
        <div onSubmit={handleSubmit} className="schedule-form">
            <Input name="schedule-name" type="text" placeholder="Name for a schedule" onChange={(e:any) => setName(e.target.value)}/>
            <Button text="Create Schedule" type="submit"></Button>
        </div>
    );
}