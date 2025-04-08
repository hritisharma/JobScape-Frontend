import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import { DateInput, TimeInput } from '@mantine/dates';
import { useRef } from 'react';


const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="w-[23rem] bg-mine-shaft-900 p-4 rounded-xl mt-5 hover:shadow-[0_0_2px_1px_orange] cursor-pointer">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar className="w-7 h-7" size={"lg"} src={`/${props.image}.png`} alt="Meta logo" />
                    </div>
                    <div className="p-2">
                        <div className="text-mine-shaft-100 font-semibold">{props.name}</div>
                        <div className="text-mine-shaft-200 text-xs">{props.role} &#x2022; {props.company}</div>
                    </div>
                </div>
                <IconHeart className="text-web-orange-500 cursor-pointer hover:text-web-orange-300" />
            </div>
            <div className="flex gap-2">
                {
                    props.topSkills.map((item: any, index: any) => <div key={index} className="flex gap-2 mt-2 [&>div]:rounded-lg text-sm p-1 [&>div]:p-2  [&>div]:bg-mine-shaft-700 [&>div]:text-web-orange-500 [&>div]:text-xs">
                        <div>{item}</div>
                    </div>)
                }
            </div>

            <Text className="!text-xs !mt-2  !text-mine-shaft-300" lineClamp={3}>
                {props.about}
            </Text>
            <Divider size="xs" color="web-orange" className="mt-4" />
            {
                props.invited ? <div className="flex gap-1 text-mine-shaft-200 text-sm items-center pt-4 ">
                    <IconCalendarMonth stroke={1.5} /> Interview: April 27, 2025 10:00 AM
                </div> : <div className="flex justify-between mt-4">
                    <div className="!text-md text-mine-shaft-100 font-semibold">{props.expectedCtc}</div>
                    <div className="flex justify-between gap-1 text-xs items-center text-mine-shaft-300">
                        <IconMapPin stroke={1.5} /> {props.location}
                    </div>
                </div>
            }

            <Divider size="xs" color="web-orange" className="mt-4" />
            {
                props.invited ? <div className="flex mt-3 [&>*]:w-1/2 pt-1 pb-1 gap-2">
                    <Button variant="outline" color="green.6" fullWidth>Accept</Button>
                    <Button variant="light" color="red.6" fullWidth>Reject</Button>
                </div> : <div className="flex mt-3 [&>*]:w-1/2 [&>*]:p-1">
                    <Link to="/talent-profile">
                        <Button variant="outline" color="web-orange" fullWidth>Profile</Button>
                    </Link>
                    <div>
                        {props.posted ? (
                            <Button onClick={open} variant="light" color="web-orange.5" rightSection={<IconCalendarMonth stroke={1.5} />} fullWidth>Schedule</Button>
                        ) : (
                            <Button variant="light" color="web-orange" fullWidth>Message</Button>
                        )}
                    </div>
                </div>
            }


            {/* Modal Content */}
            <Modal opened={opened} onClose={close} title="Schedule an Interview">
                <div className="flex flex-col gap-5">
                    <DateInput
                        minDate={new Date()}
                        maxDate={dayjs(new Date()).add(1, 'month').toDate()}
                        label="Date"
                        placeholder="Enter Date"
                    />
                    <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />
                    <Button variant="light" color="web-orange.5" fullWidth>Schedule</Button>
                </div>
            </Modal>
        </div>
    );
};

export default TalentCard;
