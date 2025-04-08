import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import JobsComp from "./JobsComp";
import EmployeesComp from "./EmployeesComp";

const CompanyProfile = () => {
    return (
        <div className="w-3/4 px-4 py-4 mb-10">
            <div className="relative">
                <img className="rounded-t-2xl" src="banner.jpg" alt="banner" />
                <img className="rounded-full  bg-mine-shaft-950 w-36 h-36 mb-10 -bottom-20 left-3 border-8 border-mine-shaft-950  absolute" src="/Google.png" alt="avatar" />

            </div>
            <div className="mt-10 px-2">
                <div className="flex justify-between text-3xl font-semibold">Google <Avatar.Group>
                    <Avatar src="avatar.png" />
                    <Avatar src="avatar2.png" />
                    <Avatar src="avatar1.png" />
                    <Avatar>+10k</Avatar>
                </Avatar.Group></div>
                <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
                    <IconMapPin stroke={1.5} /> New York , United States
                </div>
            </div>
            <Divider size="xs" className="mt-10" />
            <div>
                <Tabs defaultValue="about" variant="outline">
                    <Tabs.List className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-web-orange-500">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
                    <Tabs.Panel value="jobs"><JobsComp /></Tabs.Panel>
                    <Tabs.Panel value="employees"><EmployeesComp /></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default CompanyProfile;