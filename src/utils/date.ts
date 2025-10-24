function formatDate(date: string) {

    const getLocaleDate = () => Intl.DateTimeFormat("en-us", { dateStyle: "medium" }).format(new Date(date));

    return { getLocaleDate }
}

export default formatDate;