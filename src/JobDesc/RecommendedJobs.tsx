import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJobs = () => {
    return (
        <div className="mx-20">
            <div className="text-2xl font-semibold mx-10 flex flex-col flex-wrap">Recommended Jobs</div>
            {
                jobList.map((item, index) => index < 5 && <JobCard key={index} {...item} />)
            }
        </div>
    )
}

export default RecommendedJobs;