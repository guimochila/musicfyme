import { LinkBox, LinkOverlay, List, ListItem } from '@chakra-ui/layout'
import Link from 'next/link'

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Playlist = () => (
  <List spacing={2}>
    {playlists.map((playlist) => (
      <ListItem paddingX="20px" key={playlist}>
        <LinkBox>
          <Link href="/" passHref>
            <LinkOverlay>{playlist}</LinkOverlay>
          </Link>
        </LinkBox>
      </ListItem>
    ))}
  </List>
)

export default Playlist
