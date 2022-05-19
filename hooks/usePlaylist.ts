import useSWR from 'swr'
import fetcher from '../lib/fetcher'

export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher)

  return {
    playlist: data || [],
    isLoading: !data && !error,
    isError: error,
  }
}
