import { Tabs } from "@mantine/core";
import AboutComp from "../CompanyProfile/AboutComp";
import Jobs from "../FindJobs/Jobs";
import EmployeesComp from "../CompanyProfile/EmployeesComp";
import { jobList } from "../Data/JobsData";
import JobHistoryCard from "./JobHistoryCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/JobService";
import { useSelector } from "react-redux";

const JobHistory = () => {
    const [activeTab, setActiveTab] = useState<any>('APPLIED');
    const [jobList, setJobList] = useState<any>([]);
    const [showList, setShowList] = useState<any>([]);
    const profile = useSelector((state: any) => state.profile);
    const user = useSelector((state: any) => state.user);

    useEffect(() => {
        if (!user?.id) return;
        getAllJobs().then((res) => {
            console.log("Jobs fetched:", res);

            setJobList(res);
            setShowList(res.filter((job: any) => job.applicants?.filter((applicant: any) => applicant.applicantId == profile.id && applicant.applicationStatus == "APPLIED").length > 0))
        }).catch((error) => {
            console.log(error);
        })
    }, [profile?.id])

    console.log("Profile in JobHistory:", user);


    const handleTabChange = (value: string | null) => {
        setActiveTab(value);
        if (value == "SAVED") {
            setShowList(jobList.filter((job: any) => profile.savedJobs?.includes(job.id)))
        }
        else {
            setShowList(jobList.filter((job: any) => job.applicants?.filter((applicant: any) => applicant.applicantId == user.id && applicant.applicationStatus == value).length > 0))
        }
    }

    return (
        <div>
            <div className="text-2xl font-semibold mt-4 mb-8">Job History</div>
            <div>
                <Tabs value={activeTab} onChange={handleTabChange} variant="outline">
                    <Tabs.List className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-web-orange-500">
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value={activeTab}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
                            {
                                showList.map((item: any, index: any) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-1">
                                        <JobHistoryCard
                                            {...item}
                                            {...{ [activeTab.toLowerCase()]: true }}
                                        />

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
