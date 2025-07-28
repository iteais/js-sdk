// import 'server-only'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/option'
import retryFetch from './retry-fetch'

type FetchArguments = Parameters<typeof fetch>;

/**
 * Fetch wrapper for server side use only.
 * Implemented retries and timeout.
 *
 * @param args
 */
export default async function serverFetch(...args: FetchArguments): Promise<Response> {
  const session = await getServerSession(authOptions)
  const fetchParams = args

  fetchParams[1] = {
    ...fetchParams[1],
    headers: {
      ...fetchParams[1]?.headers,
      // Authorization: `${session?.user.token}`,
    },
  }

  if (session) {
    fetchParams[1] = {
      ...fetchParams[1],
      headers: {
        ...fetchParams[1]?.headers,
        // Authorization: `Bearer ${session!.user!.token}`,
      },
    }
  }

  return retryFetch(fetchParams[0], fetchParams[1])
}
