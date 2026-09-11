import issues from "../data/Issues";

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

export function getCountByStatus() {
    return {
        open: issues.filter(i => i.status === 'open').length,
        active: issues.filter(i => i.status === 'active').length,
        resolved: issues.filter(i => i.status === 'resolved').length,
        total: issues.length
    }
}

export function avgFixTime() {
    let fixTimes = []

    issues.forEach(issue => {
        if (issue.status === 'resolved') {
            const fixTime =
                (new Date(issue.resolvedDate) - new Date(issue.date)) /
                (1000 * 60 * 60 * 24)

            fixTimes.push(fixTime)
        }
    })

    const average = fixTimes.reduce((sum, time) => sum + time, 0) / fixTimes.length

    return average

}


export function getCountByCategory() {
    return {
        potholes: issues.filter(i => i.category === 'Potholes').length,
        streetlight: issues.filter(i => i.category === 'Streetlight').length,
        waste: issues.filter(i => i.category === 'Waste').length,
        signage: issues.filter(i => i.category === 'Signage').length,
        other: issues.filter(i => i.category === 'Other').length,
        total: issues.length
    }
}