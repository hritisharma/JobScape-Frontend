import {
    IconBriefcase,
    IconCheck,
    IconDeviceFloppy,
    IconEdit,
    IconMapPin,
    IconPencil,
    IconPlus,
    IconX,
} from "@tabler/icons-react";
import {
    ActionIcon,
    Avatar,
    Button,
    Divider,
    FileInput,
    Overlay,
    TagsInput,
    Textarea,
} from "@mantine/core";

import { useEffect, useState } from "react";
import fields from "../Data/Profile";
import { getProfile, updateProfile } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile, setProfile } from "../Slices/ProfileSlice";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import CertificationSection from "./CertificationSection";
import { useHover } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

const Profile = () => {
    const user = useSelector((state: any) => state.user);
    const profile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    const select = fields;
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [addExp, setAddExp] = useState(false);
    const { hovered, ref } = useHover();
    const [skills, setSkills] = useState([
        "React",
        "SpringBoot",
        "MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MySQL",
        "Python",
        "Django",
        "Figma",
        "Sketch",
        "Docker",
        "AWS",
    ]);
    const [about, setAbout] = useState(
        "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively."
    );

    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
        console.log(newEdit);
    };

    useEffect(() => {
        getProfile(user.id)
            .then((data: any) => {
                dispatch(setProfile(data));
                console.log("Fetched data:", data); // ✅ Valid
            })
            .catch((error: any) => {
                console.log("Profile fetch error:", error);
            });
    }, []);


    // const handleFileChange = async (image: any) => {
    //     try {
    //         console.log("File selected:", image); // Check if file is being received

    //         if (!image) {
    //             console.error("No file selected");
    //             return;
    //         }

    //         let picture: any = await getBase64(image);
    //         console.log("Base64 result:", picture ? "Success" : "Failed"); // Check if base64 conversion succeeded
    //         console.log("Base64 length:", picture ? picture.length : 0); // Check length instead of full string

    //         // Rest of your code
    //         let updatedProfile = { ...profile, picture: picture.split(',')[1] };
    //         dispatch(changeProfile(updatedProfile));
    //         notifications.show({
    //             title: 'Success',
    //             message: "Profile Picture updated successfully",
    //             icon: <IconCheck />,
    //             color: "teal",
    //             autoClose: 3000,
    //         });
    //     } catch (error) {
    //         console.error("Error in handleFileChange:", error);
    //     }
    // }

    // const getBase64 = (file: any) => {
    //     return new Promise((resolve, reject) => {
    //         console.log("Starting file conversion"); // Debug log
    //         const reader = new FileReader();

    //         reader.onload = () => {
    //             console.log("File read successful"); // Debug log
    //             resolve(reader.result);
    //         };

    //         reader.onerror = error => {
    //             console.error("Error reading file:", error); // Debug error
    //             reject(error);
    //         };

    //         reader.readAsDataURL(file);
    //     });
    // }

    return (
        <div className="w-4/5 mx-auto px-4 py-10 mb-10">
            <div className="relative">
                <img className="rounded-t-xl w-full" src="banner.jpg" alt="banner" />
                <div className="absolute -bottom-3 left-3 flex items-center justify-center cursor-pointer" ref={ref}>
                    <Avatar
                        src="avatar.png"
                        alt="avatar"
                        radius="xl"
                        className="!w-48 !h-48 !rounded-full border-8 border-white shadow-lg"
                    />
                    {hovered && (
                        <Overlay
                            color="#000"
                            backgroundOpacity={0.25}
                            className="!rounded-full absolute z-[300]"
                        />
                    )}
                    {hovered && <FileInput
                        className="absolute z-[301] w-full h-full [&_*]:!h-full [&_*]:!rounded-full" variant="transparent" accept="image/png,image/jpeg,image/jpg"
                    />}
                    {hovered && <IconEdit className="absolute z-11 text-mine-shaft-100 !w-16 !h-16" stroke={1.5} />}
                </div>
            </div>

            <div className="mt-10">
                <Info />

                <Divider size="xs" className="mt-10" />
                <AboutSection />

                <SkillsSection />
                <Divider size="xs" className="mt-10" />

                <ExperienceSection />
                <Divider size="xs" className="mt-10" />

                <CertificationSection />
            </div>
        </div>
    );
};

export default Profile;
