const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric' as const, month: 'short' as const };
    return date.toLocaleString('en-US', options);
};

function timeAgo(time: string) {
    const now = new Date();
    const postDate = new Date(time);
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000); // ✅ Convert ms to seconds

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);
    const months = Math.floor(diffInSeconds / 2592000); // ~30 days

    if (diffInSeconds < 60) {
        return 'Just now';
    } else if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (days < 30) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    }
}

const formatInterviewTime = (dateStr: any) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })

}

const openResumeFromBase64 = (base64String: string) => {
    // Remove header if present
    const base64 = base64String.split(',')[1] || base64String;

    // Convert base64 to byte array
    const byteCharacters = atob(base64);
    const byteNumbers = Array.from(byteCharacters, char => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);

    // Create blob from byte array
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    // Create object URL and open in new tab
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL, '_blank');
};

export { formatDate, timeAgo, formatInterviewTime, openResumeFromBase64 };
