export function displayDate(issueDate) {
    const date = new Date(issueDate)
    const now = new Date();
    const dateDif = Math.floor((now - date) / (1000 * 60 * 60 * 24))

    if (dateDif === 0) {
        return 'Today'
    }
    if (dateDif === 1) {
        return 'Yesterday'
    }
    if (dateDif < 10) {
        return `${dateDif} days ago`
    }
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function displayStatusColor(status) {
    if (status === 'open') {
        return 'text-red-800 bg-red-200'
    }
    if (status === 'active') {
        return 'text-orange-800 bg-orange-200'
    }
    if (status === 'resolved') {
        return 'text-green-800 bg-green-200'
    }


}