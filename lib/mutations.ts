import fetcher from './fetcher'

export type TAuthMode = 'signin' | 'signup'

export const auth = (
  mode: TAuthMode,
  body: { email: string; password: string },
) => {
  return fetcher(`/${mode}`, body)
}
