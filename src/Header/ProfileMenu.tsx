import { Menu, Button, Text, Avatar, Switch } from '@mantine/core';
import {
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconArrowsLeftRight,
    IconLogout2,
    IconUserCircle,
    IconFile,
    IconFileText,
    IconMoon,
    IconSun,
    IconMoonStars,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../Slices/UserSlice';

const ProfileMenu = () => {
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const handleLogout = () => {
        dispatch(removeUser());
    }
    return (

        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="flex gap-4 items-center">
                    <div className='text-sm font-semibold'>{user.name}</div>
                    <Avatar src="avatar-9.png" alt="it's me" />
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Link to={'/profile'}>
                    <Menu.Item leftSection={<IconUserCircle size={14} />}>
                        Profile
                    </Menu.Item></Link>

                <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconFileText size={14} />}>
                    Resume
                </Menu.Item>
                <Menu.Item
                    leftSection={<Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                        />}
                    />}
                >
                    Dark Mode
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    color="red"
                    leftSection={<IconLogout2 size={14} />}
                    onClick={handleLogout}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
export default ProfileMenu;