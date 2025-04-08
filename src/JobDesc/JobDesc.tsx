import { Button } from "@mantine/core";
import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Divider } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { card, desc, skills } from "../Data/JobDescData";
import DOMpurify from 'dompurify';
import RecommendedJobs from "./RecommendedJobs";

const JobDesc = (props: any) => {
    const data = DOMpurify.sanitize(desc);
    return (
        <div className="w-2/3 mb-10">
            <div className="flex justify-between py-5">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="w-14 h-14" src={`/Icons/Google.png`} alt="Google" />
                    </div>
                    <div className="p-2">
                        <div className="text-mine-shaft-100 font-semibold text-2xl">Software Engineer III</div>
                        <div className="text-mine-shaft-200 text-lg">Google &#x2022; 3 days ago &#x2022; 42 Applicants </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link to={'/apply-job'}>
                        <Button variant="outline" className="!w-40">{props.edit ? "Edit" : "Apply"}</Button>
                    </Link>

                    {props.edit ? <Button variant="outline" className="!w-40" color="red.6">Delete</Button> : <IconBookmark className="text-web-orange-500 cursor-pointer hover:text-web-orange-300 size-7 mt-2" />}
                </div>
            </div>
            <Divider size="xs" className="mb-2 mt-4" />
            <div className="py-3 flex gap-1 justify-between">
                {
                    card.map((item, index) => <div key={index} className="flex flex-col items-center gap-1">
                        <ActionIcon
                            className="!h-12 !w-12 !bg-mine-shaft-900 !text-web-orange-500"
                            variant="light"
                            radius="xl"
                            aria-label="Settings"
                        >
                            <item.icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                        <div className="text-sm">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                    </div>)
                }
            </div>
            <Divider size="xs" className="mb-2 mt-4" />
            <div>
                <div className="text-xl text-mine-shaft-200 font-semibold my-5">Required Skills</div>
                <div className="gap-3 flex flex-wrap mt-6 ">
                    {
                        skills.map((item, index) => <ActionIcon key={index}
                            className="!h-fit !w-fit !p-2  !border-2 !border-web-orange-500 !bg-mine-shaft-900 !text-web-orange-500 !text-web-orange-500 !text-sm"
                            variant="light"
                            radius="xl"
                            aria-label="Settings"
                        >
                            {item}
                        </ActionIcon>)
                    }
                </div>
            </div>
            <Divider size="xs" className="mb-2 mt-10" />
            <div className="[&_h4]:text-xl [&_h4]:text-mine-shaft-200 [&_h4]:my-5 [&_h4]:font-semibold [&_p]:text-justify [&_li]:marker:text-web-orange-500 [&_li]:my-1" dangerouslySetInnerHTML={{ __html: data }}>

            </div>
            <Divider size="xs" className="mb-2 mt-10" />
            <div>
                <div className="text-xl text-mine-shaft-200 font-semibold my-5">About Company</div>
                <div className="flex justify-between py-1 mb-3">
                    <div className="flex gap-2 items-center">
                        <div className="p-2 bg-mine-shaft-800 rounded-md">
                            <img className="w-10 h-10" src={`/Icons/Google.png`} alt="Google" />
                        </div>
                        <div className="p-2">
                            <div className="text-mine-shaft-100 font-medium text-lg">Google</div>
                            <div className="text-mine-shaft-200 text-md">10k+ Employees</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Link to="/company">
                            <Button variant="outline" className="!w-40">Company Page</Button>
                        </Link>

                    </div>
                </div>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consectetur laborum omnis debitis dolorum aut! Expedita sit nemo ab voluptates Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quia ad totam distinctio rerum nulla voluptas laudantium, itaque quibusdam sed?.
                </div>
            </div>
        </div>
    );
}

export default JobDesc;
