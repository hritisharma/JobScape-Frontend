import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { Divider } from "@mantine/core";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import { profile } from "../Data/TalentData";

const Profile = () => {
    return (
        <div className="w-2/3 px-4 py-4 mb-10">
            <div className="relative">
                <img className="rounded-t-xl" src="banner.jpg" alt="banner" />
                <img className="rounded-full w-48 h-48 -bottom-3 left-2 border-8  absolute" src="avatar.png" alt="avatar" />

            </div>
            <div className="mt-10 px-2">
                <div className="flex justify-between text-3xl font-semibold">Jarrod Wood<Button variant="light" color="web-orange" className="!w-3/3" >Message</Button></div>
                <div className="text-xl flex gap-1 items-center"><IconBriefcase stroke={1.5} />Software Engineer &#x2022; Google</div>
                <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
                    <IconMapPin stroke={1.5} /> New York , United States
                </div>
            </div>
            <Divider size="xs" className="mt-10" />
            <div>
                <div className="text-2xl font-semibold mt-4 mx-1">About</div>

                <div className="text-sm text-mine-shaft-200 text-justify mt-2 px-1">
                    {profile.about}
                </div>
            </div>
            <Divider size="xs" className="mt-10" />
            <div>
                <div className="text-2xl font-semibold mt-4 mx-1">Skills</div>
                <div className="text-sm text-mine-shaft-200 text-justify mt-2 px-1">
                    <div className="flex flex-wrap mt-1 gap-4 my-3">
                        {
                            profile.skills.map((item, index) => <div key={index} className="bg-mine-shaft-900 text-web-orange-500 rounded-full border-2 border-web-orange-500 text-md px-2 py-1">{item}</div>
                            )
                        }
                    </div>

                </div>
                <Divider size="xs" className="mt-10" />
                <div>
                    <div className="text-2xl font-semibold mt-4 mx-1">Experience</div>
                    {
                        profile.experience.map((item, index) => <ExperienceCard key={index} {...item} />)
                    }

                </div>
                <Divider size="xs" className="mt-10" />
                <div>
                    <div className="text-2xl font-semibold mt-4 mx-1">Certification</div>
                    {
                        profile.certifications.map((item, index) => <CertificationCard key={index} {...item} />)
                    }
                </div>
            </div>
        </div >
    )
}

export default Profile;