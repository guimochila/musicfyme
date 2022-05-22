import useSWR from 'swr'
import fetcher from '../lib/fetcher'

interface Song {
  name: string
  duration: number
  url: string
}
interface IPlaylist {
  name: String
  id: string
  songs: Song[]
}

export const usePlaylist = () => {
  const { data, error } = useSWR<IPlaylist[]>('/playlist', fetcher)

  return {
    playlist: data || [],
    isLoading: !data && !error,
    isError: error,
  }
}
