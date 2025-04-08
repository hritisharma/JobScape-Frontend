import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock, IconRecordMail, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center">
            <div className="text-2xl text-web-orange-500 font-semibold">Create Account</div>
            <div className="w-4/5 gap-3 mt-3 space-y-3">
                <TextInput
                    leftSectionPointerEvents="none"
                    label="Full Name"
                    placeholder="Enter Full Name"
                    leftSection={<IconUser size={18} />}
                    withAsterisk
                />
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
                <PasswordInput
                    leftSection={<IconLock size={18} />}
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                    withAsterisk
                />

                <Checkbox
                    className="!mt-4"
                    autoContrast
                    label={
                        <div>
                            I accept {' '}
                            <Anchor href="#" onClick={(e) => e.preventDefault()}>Terms and Conditions</Anchor>
                        </div>
                    }
                />

                <Button autoContrast className="!w-full !mt-4">SignUp</Button>
                <div className="text-center">Have an account? <Link className="text-web-orange-400 hover:underline" to="/login">Login</Link></div>
            </div>

        </div>
    )
}

export default SignUp;