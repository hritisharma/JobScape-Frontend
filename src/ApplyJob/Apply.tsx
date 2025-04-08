import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { Notification } from "@mantine/core";

const Apply = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [time, setTime] = useState(5);

    const handlePreview = () => {
        setPreview(!preview);
        window.scroll({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setTime(x);
            if (x == 0) {
                window.location.href = '/find-jobs';
            }

        }, 1000)
    };

    return (
        <>
            <div className="w-2/3 mx-auto py-5">
                <LoadingOverlay className="!fixed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: 'xs', blur: 2 }}
                    loaderProps={{ color: 'web-orange', type: 'bars' }}
                />
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="w-14 h-14" src={`/Icons/Google.png`} alt="Google" />
                    </div>
                    <div className="p-2">
                        <div className="text-mine-shaft-100 font-semibold text-2xl">Software Engineer III</div>
                        <div className="text-mine-shaft-200 text-lg">Google &#x2022; 3 days ago &#x2022; 42 Applicants </div>
                    </div>
                </div>
                <Divider size="xs" className="mb-2 mt-4" />
                <div className="text-xl font-semibold mt-4 mb-4">Submit your Application</div>
                <div className="flex flex-col gap-5 mt-2">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput
                            label="Full Name"
                            placeholder="Enter name"
                            withAsterisk
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Enter email"
                            withAsterisk
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput
                            label="Phone Number"
                            placeholder="Enter number"
                            withAsterisk
                            hideControls
                            min={0}
                            max={9999999999}
                            clampBehavior="strict"
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        />
                        <TextInput
                            label="Links"
                            placeholder="Enter url"
                            withAsterisk
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        />
                    </div>

                    <FileInput
                        leftSection={<IconPaperclip stroke={1.5} />}
                        label="Attach Resume"
                        placeholder="Attach Resume"
                        withAsterisk
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                    />
                    <Textarea
                        label="Cover Letter"
                        placeholder="Type something about yourself...."
                        autosize
                        minRows={4}
                        withAsterisk
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                    />
                    {!preview && <Button onClick={handlePreview} className="!w-1/5 mt-5" variant="outline">Preview</Button>}
                    {preview && (
                        <div className="flex gap-3">
                            <Button onClick={handlePreview} className="!w-1/5 mt-5" variant="outline">Edit</Button>
                            <Button onClick={handleSubmit} className="!w-1/5 mt-5" variant="outline">Submit</Button>
                        </div>
                    )}
                </div>
            </div>

            <Notification
                icon={<IconCheck size={20} />}
                className={`!fixed top-0 left-[70%] transform transition-all duration-500 ease-in-out ${submit ? "translate-y-20" : "-translate-y-20"} z-[1001]`}
                withBorder
                color="teal"
                title="Application Submitted!"
                mt="md"
                withCloseButton={false}

            >
                Redirecting to Find Jobs in {time} seconds...
            </Notification>
        </>
    );
};

export default Apply;
