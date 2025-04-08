import { ActionIcon } from "@mantine/core";
import { IconBookmark, IconTrash } from "@tabler/icons-react";

const CertificationCard = (props: any) => {
    return (
        <div>
            <div className="flex justify-between mt-4 px-1">
                <div className="flex gap-2 items-center mt-1">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="w-7 h-7" src={`/Icons/${props.issuer}.png`} alt="Issuer logo" />
                    </div>
                    <div className="p-2">
                        <div className="text-mine-shaft-100 font-semibold">{props.name}</div>
                    </div>
                </div>

                {/* Dates aligned at the end and centered vertically */}
                <div className="flex items-center gap-2">
                    <div className="text-sm flex flex-col ml-auto justify-center items-center">
                        <div>{props.issueDate}</div>
                        <div>ID: {props.certificateId}</div>
                    </div>
                    {props.edit && <ActionIcon color="red.6" size={"lg"} variant="subtle">

                        <IconTrash className="w-4/5 h-4/5" stroke={1.5} />
                    </ActionIcon>}
                </div>

            </div>
        </div>
    );
};

export default CertificationCard;
