import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconBinocularsFilled, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
    const location = useLocation();
    return (
        location.pathname != "/signup" && location.pathname != "/login" ? <div className="w-full bg-mine-shaft-950 h-20 flex justify-between px-6 items-center">
            <div className="text-web-orange-500 flex items-center gap-1 hover:text-web-orange-600 cursor-pointer">
                <IconBinocularsFilled width={40} height={40} stroke={1.5} />
                <div className="text-xl font-semibold">JobScape</div>
            </div>
            <NavLinks />
            <div className="flex gap-5 items-center text-white text-xl">

                <ProfileMenu />
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <Indicator color="rgba(255, 0, 0, 1)" size={9} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
            </div>

        </div> : <></>

    )
}

export default Header;