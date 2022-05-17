import { Box, Divider } from '@chakra-ui/layout'
import Image from 'next/image'
import Playlist from '../Playlist/Playlist'

import MainMenu from './MainMenu'
import MusicMenu from './MusicMenu'

const Sidebar = () => {
  return (
    <Box width="100%" height="100vh" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingY="20px">
          <Image src="/logo.svg" height={60} width={120} alt="Musicfy Logo" />
        </Box>
        <MainMenu />
        <MusicMenu />
        <Divider marginY="20px" color="gray.800" />
        <Box height="61%" overflowY="auto" paddingY="20px">
          <Playlist />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
