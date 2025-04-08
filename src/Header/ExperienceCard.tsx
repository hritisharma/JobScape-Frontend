import { Button } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExperienceCard = (props: any) => {
    const [edit, setEdit] = useState(false);
    return (
        !edit ? <div>
            <div className="flex justify-between mt-4 px-1 items-center">
                {/* Other content on the left */}
                <div className="flex gap-2 items-center mt-1">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="w-7 h-7" src={`/Icons/${props.company}.png`} alt="Meta logo" />
                    </div>
                    <div className="p-2">
                        <div className="text-mine-shaft-100 font-semibold">{props.title}</div>
                        <div className="text-mine-shaft-200 text-xs">{props.company} &#x2022; {props.location}</div>
                    </div>
                </div>

                {/* Dates centered at the end of the line */}
                <div className="text-sm py-2 ml-auto flex justify-center">
                    {props.startDate} - {props.endDate}
                </div>
            </div>
            <div className="text-sm px-1 text-justify mt-1">{props.description}</div>
            {props.edit && <div className="flex gap-5 mt-4">
                <Button onClick={() => setEdit(true)} variant="outline" color="web-orange" className="!w-3/3" >Edit</Button>
                <Button variant="light" color="red.6" className="!w-3/3" >Delete</Button>
            </div>}
        </div > : <ExpInput setEdit={setEdit} />
    );
};

export default ExperienceCard;
