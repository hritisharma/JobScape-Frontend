import { Button, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";


const CertiInput = (props: any) => {
    const [issueDate, setIssueDate] = useState<Date | null>(new Date());
    const select = fields;
    return (
        <div className="flex flex-col gap-3 mt-2">
            <div className="text-lg font-semibold ml-1 mt-3">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput label="Title" withAsterisk placeholder="Enter Title" />
                <SelectInput {...select[1]} />

            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    label="Issued Date"
                    placeholder="Choose Date"
                    value={issueDate}
                    onChange={setIssueDate}
                    maxDate={new Date()}
                    withAsterisk
                />
                <TextInput label="Certificate Id" withAsterisk placeholder="Enter Id" />
            </div>
            <div className="flex gap-5 mt-2">
                <Button onClick={() => props.setEdit(false)} variant="outline" color="web-orange" className="!w-3/3" >Save</Button>
                <Button onClick={() => props.setEdit(false)} variant="light" color="red.6" className="!w-3/3" >Cancel</Button>
            </div>


        </div>
    )
}

export default CertiInput;