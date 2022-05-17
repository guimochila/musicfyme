import { Box, List } from '@chakra-ui/layout'
import MenuItem from './MenuItem'

import { MdHome, MdLibraryMusic, MdSearch } from 'react-icons/md'

const navMenu = [
  { name: 'Home', icon: MdHome, route: '/' },
  { name: 'Search', icon: MdSearch, route: '/search' },
  { name: 'Your Library', icon: MdLibraryMusic, route: '/library' },
]

const MainMenu = () => {
  return (
    <Box marginBottom="20px">
      <List spacing={2}>
        {navMenu.map((menu) => (
          <MenuItem menu={menu} key={menu.name} />
        ))}
      </List>
    </Box>
  )
}

export default MainMenu
