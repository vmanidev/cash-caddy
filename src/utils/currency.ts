export const formatLocaleCurrency = (amount: string | number) => {
    try {
        let parsedValue = typeof amount === "string" ? parseInt(amount) : amount;
        return parsedValue ? Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(parsedValue) : amount;
    }
    catch {
        return amount;
    }
}