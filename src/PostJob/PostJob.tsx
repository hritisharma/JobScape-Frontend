import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import { Button, TagsInput } from "@mantine/core";
import TextEditor from "./TextEditor";

const PostJob = () => {
    const select = fields;
    return (
        <div className="w-4/5 mx-auto mt-8">
            <div className="text-2xl font-semibold mb-8">Publish a Job Opening</div>
            <div className=" flex flex-col gap-10">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...select[2]} />
                    <SelectInput {...select[3]} />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...select[4]} />
                    <SelectInput {...select[5]} />
                </div>
                <TagsInput withAsterisk label="Skills" placeholder="Enter skills" clearable acceptValueOnBlur splitChars={[',', ' ', '|']} />
                <div className="[&_button[data-active='true']]:!text-mine-shaft-200 [&_button[data-active='true']]:!bg-web-orange-600">
                    <div>Job Description</div>
                    <TextEditor />
                </div>
                <div>
                    <div className="flex gap-4 mt-3">
                        <Button variant="outline">Publish Job</Button>
                        <Button variant="outline">Save as Draft</Button>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default PostJob;
