import { IconUserCircle } from "@tabler/icons-react";
import { searchFields } from "../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";

const Searchbar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (

        <div className=" flex justify-between gap-3 px-1">
            <div className="flex">
                <div className="text-web-orange-500 rounded-full bg-mine-shaft-900 p-1 mr-2">
                    <IconUserCircle size={27} />
                </div>
                <Input variant="unstyled" placeholder="Talent Name" className="[&_input]:!placeholder-mine-shaft-200" />

            </div>
            <Divider size="xs" orientation="vertical" />
            {
                searchFields.map((item, index) => <> <div key={index} className="w-1/5">
                    <MultiInput {...item} />
                </div>  <Divider size="xs" orientation="vertical" /></>
                )
            }
            <div className="w-1/5 [&_.matine-Slider-root]:!translate-y-10">
                <div className="flex justify-between text-sm">
                    <div>Salary</div>
                    <div>&#8377; {value[0]} LPA - &#8377; {value[1]} LPA</div>
                </div>
                <RangeSlider color="web-orange" size={"sm"} value={value} onChange={setValue} labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                }} />
            </div>
        </div>

    )
}
export default Searchbar;