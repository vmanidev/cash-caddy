export const exportAsCSV = (headerData: string[], rowData: Record<string, string | number>[], filename: string) => {
    const headers = headerData.join(",");
    const rows = rowData.map((data) => Object.values(data).join(","));
    const csv = [headers, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
}