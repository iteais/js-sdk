import 'server-only';
type FetchArguments = Parameters<typeof fetch>;
/**
 * Fetch wrapper for server side use only.
 * Implemented retries and timeout.
 *
 * @param args
 */
export default function serverFetch(...args: FetchArguments): Promise<Response>;
export {};
