import { Avatar, Button, Indicator } from "@mantine/core";
import { IconBell, IconBinocularsFilled, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import NotMenu from "./NotMenu";
import { useEffect } from "react";
import { getProfile } from "../Services/ProfileService";
import { setProfile } from "../Slices/ProfileSlice";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../Slices/UserSlice";
const Header = () => {
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token") || "";
        if (token != "") {
            const decoded = jwtDecode(token);
            dispatch(setUser({ ...decoded, email: decoded.sub }));
        }
    }, [navigate]);
    useEffect(() => {
        if (user?.profileId) {
            getProfile(user.profileId).then((res) => {
                dispatch(setProfile(res));
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [user]);
    return (
        location.pathname != "/signup" && location.pathname != "/login" ? <div className="w-full bg-mine-shaft-950 h-20 flex justify-between px-6 items-center">
            <div className="text-web-orange-500 flex items-center gap-1 hover:text-web-orange-600 cursor-pointer">
                <IconBinocularsFilled width={40} height={40} stroke={1.5} />
                <div className="text-xl font-semibold">JobScape</div>
            </div>
            <NavLinks />
            <div className="flex gap-4 items-center text-white text-xl">

                {user ? <ProfileMenu /> : <Link to={'/login'}><Button variant="subtle" color="web-orange.5" className="!text-md">Login</Button></Link>}


                <div className="bg-mine-shaft-900 p-1 rounded-full mr-4">
                    {user ? <NotMenu /> : <></>}
                </div>
            </div>

        </div> : <></>

    )
}

export default Header;