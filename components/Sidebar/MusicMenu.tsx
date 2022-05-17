import { Box, List } from '@chakra-ui/layout'
import { MdFavorite, MdPlaylistAdd } from 'react-icons/md'
import MenuItem from './MenuItem'

const musicMenu = [
  { name: 'Create Playlist', icon: MdPlaylistAdd, route: '/' },
  { name: 'Favorites', icon: MdFavorite, route: '/favorites' },
]

const MusicMenu = () => {
  return (
    <Box marginTop="20px">
      <List spacing={2}>
        {musicMenu.map((menu) => (
          <MenuItem menu={menu} key={menu.name} />
        ))}
      </List>
    </Box>
  )
}

export default MusicMenu
