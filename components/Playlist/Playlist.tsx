import { LinkBox, LinkOverlay, List, ListItem } from '@chakra-ui/layout'
import Link from 'next/link'
import { usePlaylist } from '../../hooks/usePlaylist'

const Playlist = () => {
  const { playlist } = usePlaylist()

  return (
    <List spacing={2}>
      {playlist.map((playlist) => (
        <ListItem paddingX="20px" key={playlist.id}>
          <LinkBox>
            <Link href="/" passHref>
              <LinkOverlay>{playlist.name}</LinkOverlay>
            </Link>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  )
}

export default Playlist
