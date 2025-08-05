export function ObjectToQueryString(obj: Record<string, any>, prefix = ''): string {
    const parts: string[] = [];

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            const newKey = prefix ? `${prefix}[${key}]` : key;

            if (typeof value === 'object' && value !== null) {
                // Recursively call for nested objects
                parts.push(ObjectToQueryString(value, newKey));
            } else {
                // Encode and add simple key-value pairs
                parts.push(`${encodeURIComponent(newKey)}=${encodeURIComponent(value)}`);
            }
        }
    }

    return parts.join('&');
}
