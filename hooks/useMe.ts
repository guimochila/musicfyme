import { User } from '@prisma/client'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

export const useMe = () => {
  const { data, error } = useSWR<User & { playlistCount: number }>(
    '/me',
    fetcher,
  )

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}
