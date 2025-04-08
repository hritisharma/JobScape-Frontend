import { IconBookmark } from "@tabler/icons-react";

const ExperienceCard = (props: any) => {
    return (
        <div>
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
        </div>
    );
};

export default ExperienceCard;
