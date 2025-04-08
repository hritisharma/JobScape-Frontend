import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
    return (
        <div className="px-6 mt-10">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
                {
                    jobList.map((item, index) => (
                        <div className="px-2"> {/* Adding padding to each JobCard */}
                            <JobCard key={index} {...item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Jobs;
