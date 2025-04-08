import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import { ActionIcon, Button, TagsInput, Textarea } from "@mantine/core";
import { Divider } from "@mantine/core";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import { profile } from "../Data/TalentData";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = () => {
    const select = fields;
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    const [skills, setSkills] = useState([
        "React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express",
        "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"
    ]);
    const [about, setAbout] = useState("As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.");

    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
        console.log(newEdit);
    };

    return (
        <div className="w-4/5 mx-auto px-4 py-10 mb-10">
            <div className="relative">
                <img className="rounded-t-xl" src="banner.jpg" alt="banner" />
                <img className="rounded-full w-48 h-48 -bottom-3 left-2 border-8 absolute" src="avatar.png" alt="avatar" />
            </div>
            <div className="mt-10 px-2">
                <div className="flex justify-between text-3xl font-semibold">
                    Jarrod Wood
                    <ActionIcon color="web-orange.5" size={"lg"} variant="subtle">
                        {edit[0] ? (
                            <IconDeviceFloppy onClick={() => handleEdit(0)} className="w-8 h-8" />
                        ) : (
                            <IconPencil onClick={() => handleEdit(0)} className="w-8 h-8" />
                        )}
                    </ActionIcon>
                </div>
                {edit[0] ? (
                    <>
                        <div className="flex gap-10 [&>*]:w-1/2 h-20 mt-2 ">
                            <SelectInput {...select[0]} />
                            <SelectInput {...select[1]} />
                        </div>
                        <SelectInput {...select[2]} />
                    </>
                ) : (
                    <>
                        <div className="text-xl flex gap-1 items-center">
                            <IconBriefcase stroke={1.5} /> Software Engineer &#x2022; Google
                        </div>
                        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
                            <IconMapPin stroke={1.5} /> New York, United States
                        </div>
                    </>
                )}
            </div>

            <Divider size="xs" className="mt-10" />

            <div>
                <div className="text-2xl font-semibold mt-4 mx-1 justify-between flex mb-8">
                    About
                    <ActionIcon color="web-orange.5" size={"lg"} variant="subtle">
                        {edit[1] ? (
                            <IconDeviceFloppy onClick={() => handleEdit(1)} className="w-8 h-8" />
                        ) : (
                            <IconPencil onClick={() => handleEdit(1)} className="w-8 h-8" />
                        )}
                    </ActionIcon>
                </div>
                {edit[1] ? (
                    <Textarea
                        value={about}
                        autosize
                        placeholder="Enter about yourself......"
                        onChange={(event) => setAbout(event.currentTarget.value)}
                        minRows={3}
                    />
                ) : (
                    <div className="text-sm text-mine-shaft-200 text-justify mt-2 px-1">
                        {about}
                    </div>
                )}
            </div>

            <Divider size="xs" className="mt-10" />

            <div>
                <div className="text-2xl font-semibold mt-4 mx-1 flex justify-between mb-8">
                    Skills
                    <ActionIcon color="web-orange.5" size={"lg"} variant="subtle" onClick={() => setAddExp(true)}>
                        {edit[2] ? (
                            <IconDeviceFloppy onClick={() => handleEdit(2)} className="w-8 h-8" />
                        ) : (
                            <IconPencil onClick={() => handleEdit(2)} className="w-8 h-8" />
                        )}
                    </ActionIcon>
                </div>
                <div className="text-sm text-mine-shaft-200 text-justify mt-2 px-1">
                    {edit[2] ? (
                        <TagsInput
                            placeholder="Add Skill"
                            value={skills}
                            onChange={setSkills}
                            splitChars={[',', ' ', '|']}
                        />
                    ) : (
                        <div className="flex flex-wrap mt-1 gap-4 my-3">
                            {skills.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-mine-shaft-900 text-web-orange-500 rounded-full border-2 border-web-orange-500 text-md px-2 py-1"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <Divider size="xs" className="mt-10" />
            </div>

            <div>
                <div className="text-2xl font-semibold mt-4 mx-1 flex justify-between">
                    Experience
                    <div className="flex gap-4">
                        <ActionIcon onClick={() => setAddExp(true)} color="web-orange.5" size={"lg"} variant="subtle">
                            <IconPlus className="w-4/5 h-4/5" />
                        </ActionIcon>
                        <ActionIcon color="web-orange.5" size={"lg"} variant="subtle">
                            {edit[3] ? (
                                <IconDeviceFloppy onClick={() => handleEdit(3)} className="w-8 h-8" />
                            ) : (
                                <IconPencil onClick={() => handleEdit(3)} className="w-4/5 h-4/5" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
                {profile.experience.map((item, index) => (
                    <ExperienceCard key={index} {...item} edit={edit[3]} />
                ))}
                {addExp && <ExpInput add setEdit={setAddExp} />}
            </div>

            <Divider size="xs" className="mt-10" />

            <div>
                <div className="text-2xl font-semibold mt-4 mx-1 flex justify-between">
                    Certification
                    <div className="flex gap-4">
                        <ActionIcon onClick={() => setAddCerti(true)} color="web-orange.5" size={"lg"} variant="subtle">
                            <IconPlus className="w-4/5 h-4/5" />
                        </ActionIcon>
                        <ActionIcon color="web-orange.5" size={"lg"} variant="subtle">
                            {edit[4] ? (
                                <IconDeviceFloppy onClick={() => handleEdit(4)} className="w-8 h-8" />
                            ) : (
                                <IconPencil onClick={() => handleEdit(4)} className="w-4/5 h-4/5" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
                {profile.certifications.map((item, index) => (
                    <CertificationCard key={index} {...item} edit={edit[4]} />
                ))}
                {addCerti && <CertiInput setEdit={setAddCerti} />}
            </div>
        </div>
    );
};

export default Profile;
