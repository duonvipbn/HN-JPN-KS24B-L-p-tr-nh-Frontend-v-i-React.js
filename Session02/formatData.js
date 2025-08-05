export function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate());
    const month = String(d.getMonth());
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}