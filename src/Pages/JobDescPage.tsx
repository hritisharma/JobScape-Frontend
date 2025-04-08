import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";
const JobDescPage = () => {
    return (
        <div>
            <div className="min-h-[160vh] bg-mine-shaft-950 font-['poppins']">
                <Divider size="xs" className="mb-2" />
                <Link className="my-1 mx-9 inline-block px-2" to={"/find-jobs"}>
                    <Button leftSection={<IconArrowLeft size={20} />} variant="outline">Back</Button>
                </Link>
                <div className="flex gap-5 mx-9 px-2 my-1 ">
                    <JobDesc />
                    <RecommendedJobs />
                </div>

            </div>
        </div>
    )
}

export default JobDescPage;