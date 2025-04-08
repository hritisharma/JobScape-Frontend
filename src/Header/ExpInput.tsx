import { Anchor, Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
    const [checked, setChecked] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const select = fields;
    const [desc, setDesc] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.");
    return (
        <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold ml-1 mt-3">{props.add ? "Add" : "Edit"} Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
            <Textarea
                value={desc}
                autosize
                label="Summary"
                placeholder="Enter Summary....."
                onChange={(event) => setDesc(event.currentTarget.value)}
                minRows={3}
                withAsterisk
            />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    label="Start Date"
                    placeholder="Choose Date"
                    value={startDate}
                    onChange={setStartDate}
                    maxDate={endDate || undefined}
                    withAsterisk
                />

                <MonthPickerInput
                    label="End Date"
                    placeholder="Choose Date"
                    value={endDate}
                    onChange={setEndDate}
                    maxDate={new Date()}
                    minDate={startDate || undefined}
                    withAsterisk
                    disabled={checked}
                />
            </div>
            <Checkbox
                className="!mt-4"
                autoContrast
                label=" Currently Working here"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
            />
            <div className="flex gap-5 mt-2">
                <Button onClick={() => props.setEdit(false)} variant="outline" color="web-orange" className="!w-3/3" >Save</Button>
                <Button onClick={() => props.setEdit(false)} variant="light" color="red.6" className="!w-3/3" >Cancel</Button>
            </div>

        </div>
    )
}

export default ExpInput;