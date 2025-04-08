import { Badge, Tabs } from "@mantine/core";
import AboutComp from "../CompanyProfile/AboutComp";
import JobsComp from "../CompanyProfile/JobsComp";
import EmployeesComp from "../CompanyProfile/EmployeesComp";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
const PostedJobDesc = () => {
    return (
        <div className="px-5 mt-5 w-full">
            <div className="text-2xl font-semibold mb-5 flex items-center gap-4">Software Engineer <Badge color="web-orange" className="!text-web-orange-500" variant="light" size="md">Badge</Badge></div>
            <div className="font-medium text-mine-shaft-300 mb-5">New York , United States</div>
            <Tabs defaultValue="overview" variant="outline">
                <Tabs.List className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-web-orange-500">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="overview" className="[&>*]:w-full"><JobDesc edit /></Tabs.Panel>
                <Tabs.Panel value="applicants">
                    <div className="flex flex-wrap gap-10">
                        {
                            talents.map((item, index) => (
                                <div className="px-2"> {/* Adding padding to each JobCard */}
                                    <TalentCard key={index} {...item} posted />
                                </div>
                            ))
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className="flex flex-wrap gap-10">
                        {
                            talents.map((item, index) => (
                                <div className="px-2"> {/* Adding padding to each JobCard */}
                                    <TalentCard key={index} {...item} invited />
                                </div>
                            ))
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default PostedJobDesc;