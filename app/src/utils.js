

export function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toISOString().split('T')[0] ;
}