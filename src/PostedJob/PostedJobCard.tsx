const PostedJobCard = (props: any) => {
    return (
        <div className="bg-mine-shaft-900 rounded-lg p-2 border-l-2 border-l-web-orange-500">
            <div className="text-sm font-medium text-mine-shaft-200">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">{props.location}</div>
            <div className="text-xs text-mine-shaft-300">{props.posted}</div>
        </div>
    )
}

export default PostedJobCard;