import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendTalent";
const TalentProfile = () => {
    return (
        <div>
            <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
                <Divider size="xs" className="mb-2" />
                <Link className="my-1 mx-9 inline-block px-2" to={"/find-talent"}>
                    <Button leftSection={<IconArrowLeft size={20} />} variant="outline">Back</Button>
                </Link>
                <div className="flex gap-5 mx-7">
                    <Profile {...profile} />
                    <RecommendedTalent />
                </div>
            </div>
        </div>
    )
}

export default TalentProfile;