import { Tabs } from "@mantine/core";
import { useState } from "react";
import PostedJobCard from "./PostedJobCard";
import { activeJobs, drafts } from "../Data/PostedJob";
const PostedJob = () => {
    const count1 = activeJobs.length;
    const count2 = drafts.length;
    return (
        <div className="w-1/6 mt-5">
            <div className="text-2xl font-semibold mb-8">Jobs</div>
            <div>
                <Tabs defaultValue="active" variant="pills" autoContrast>
                    <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900">
                        <Tabs.Tab value="active">Active [{count1}]</Tabs.Tab>
                        <Tabs.Tab value="draft">Drafts [{count2}] </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="active"><div className="flex flex-col gap-4 mt-5">
                        {
                            activeJobs.map((item, index) => <PostedJobCard key={index} {...item} />)
                        }
                    </div></Tabs.Panel>
                    <Tabs.Panel value="draft"><div className="flex flex-col gap-4 mt-5">
                        {
                            drafts.map((item, index) => <PostedJobCard key={index} {...item} />)
                        }
                    </div></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default PostedJob;