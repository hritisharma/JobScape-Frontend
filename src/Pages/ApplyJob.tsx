import { Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Apply from "../ApplyJob/Apply";
const ApplyJob = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] ">
            <Divider size="xs" className="mb-2" />
            <Link className="my-1 mx-9 inline-block px-2" to={"/jobs"}>
                <Button leftSection={<IconArrowLeft size={20} />} variant="outline">Back</Button>
            </Link>
            <div className="flex gap-5 mx-9 px-2 my-1 ">
                <Apply />
            </div>
        </div>
    )
}

export default ApplyJob;