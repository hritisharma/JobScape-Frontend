import { IconBookmark, IconBookmarkFilled, IconClock } from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconCalendarMonth } from "@tabler/icons-react";


const JobHistoryCard = (props: any) => {
    return (
        <div className="w-[23rem] bg-mine-shaft-900 p-4 rounded-xl mt-5 hover:shadow-[0_0_2px_1px_orange] cursor-pointer border border-transparent hover:border-web-orange-500">
            <Link
                to="/jobs"
                className="w-full block"
                aria-label={`View details for job: ${props.jobTitle}`}
            >
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                        <div className="p-2 bg-mine-shaft-800 rounded-md">
                            <img className="w-7 h-7" src={`/Icons/${props.company}.png`} alt={`${props.company} logo`} />
                        </div>
                        <div className="p-2">
                            <div className="text-mine-shaft-100 font-semibold">{props.jobTitle}</div>
                            <div className="text-mine-shaft-200 text-xs">{props.company} &#x2022; {props.applicants} Applicants</div>
                        </div>
                    </div>
                    {props.saved ? <IconBookmarkFilled className="text-web-orange-500" /> : <IconBookmark className="text-web-orange-500 cursor-pointer hover:text-web-orange-300" />}
                </div>

                <div className="flex gap-2 mt-2 [&>div]:rounded-lg text-sm p-1 [&>div]:p-2 [&>div]:bg-mine-shaft-700 [&>div]:text-web-orange-500 [&>div]:text-xs">
                    <div>{props.experience}</div>
                    <div>{props.jobType}</div>
                    <div>{props.location}</div>
                </div>

                <Text className="!text-xs !mt-2 !text-mine-shaft-300" lineClamp={3}>
                    {props.description}
                </Text>

                <Divider size="xs" color="web-orange" className="mt-4" />

                <div className="flex justify-between mt-4">
                    <div className="!text-md text-mine-shaft-100 font-semibold">&#8377;{props.package}</div>
                    <div className="flex gap-1 text-xs items-center text-mine-shaft-300">
                        <IconClock stroke={1.5} /> {props.applied ? "Applied" : props.offered ? "Interviewed" : "Posted"} {props.postedDaysAgo} days ago
                    </div>
                </div>
                {props.offered || props.interviewing && <Divider size="xs" color="web-orange" className="mt-4" />}
                {
                    props.offered && <div className="flex gap-2 mt-4">
                        <Button variant="outline" color="green.6" fullWidth>Accept</Button>
                        <Button variant="light" color="red.6" fullWidth>Reject</Button>
                    </div>
                }
                {
                    props.interviewing && <div className="flex mt-4 gap-2 p-1">
                        <IconCalendarMonth stroke={1.5} className="text-web-orange-500" /> Sunday, 25 August &bull; <span className="text-mine-shaft-300">10:00 AM</span>
                    </div>
                }
            </Link>
        </div>
    );
};

export default JobHistoryCard;
