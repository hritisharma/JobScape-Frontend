import { Divider } from "@mantine/core";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] ">
            <Divider size="xs" className="mb-2" />
            <div className="flex gap-5  mx-10 pl-2">
                <PostedJob />
                <div className="px-20 mx-10 pl-2 w-3/4">
                    <PostedJobDesc />

                </div>

            </div>

        </div>

    )
}
export default PostedJobPage;