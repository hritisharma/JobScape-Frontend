import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center">
            <div className="text-2xl text-web-orange-500 font-semibold">Log in to Your Account</div>
            <div className="w-4/5 gap-3 mt-3 space-y-3">

                <TextInput
                    rightSectionPointerEvents="none"
                    label="Email"
                    placeholder="Enter Email"
                    withAsterisk
                    leftSection={<IconAt size={18} />}
                />

                <PasswordInput
                    leftSection={<IconLock size={18} />}
                    label="Password"
                    placeholder="Enter Password"
                    withAsterisk
                />

                <Button autoContrast className="!w-full !mt-4">Login</Button>
                <div className="text-center">Don't have an account? <Link className="text-web-orange-400 hover:underline" to="/signup">SignUp</Link></div>
            </div>

        </div>
    )
}

export default Login;