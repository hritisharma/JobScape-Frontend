import { Tabs } from "@mantine/core";
import AboutComp from "../CompanyProfile/AboutComp";
import Jobs from "../FindJobs/Jobs";
import EmployeesComp from "../CompanyProfile/EmployeesComp";
import { jobList } from "../Data/JobsData";
import JobHistoryCard from "./JobHistoryCard";

const JobHistory = () => {
    return (
        <div>
            <div className="text-2xl font-semibold mt-4 mb-8">Job History</div>
            <div>
                <Tabs defaultValue="applied" variant="outline">
                    <Tabs.List className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-web-orange-500">
                        <Tabs.Tab value="applied">Applied</Tabs.Tab>
                        <Tabs.Tab value="saved">Saved</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="applied">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
                            {
                                jobList.map((item, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-1">
                                        <JobHistoryCard {...item} applied />
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="saved">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
                            {
                                jobList.map((item, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-1">
                                        <JobHistoryCard {...item} saved />
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
                            {
                                jobList.map((item, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-1">
                                        <JobHistoryCard {...item} offered />
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="interviewing">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
                            {
                                jobList.map((item, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-1">
                                        <JobHistoryCard {...item} interviewing />
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}
export default JobHistory;
