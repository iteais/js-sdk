export function ObjectToQueryString(obj: Record<string, any>): string {
    const params = new URLSearchParams()
    for (const key in Object.keys(obj)) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key]
            if (value !== undefined && value !== null) { // Handle undefined/null values
                params.append(key, String(value))
            }
        }
    }
    return params.toString()
}
