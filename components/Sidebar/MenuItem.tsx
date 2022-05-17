import { LinkBox, LinkOverlay, ListIcon, ListItem } from '@chakra-ui/layout'
import Link from 'next/link'
import type { IconType } from 'react-icons'

interface MenuItemProps {
  menu: {
    name: string
    icon: IconType
    route: string
  }
}

const MenuItem = ({ menu }: MenuItemProps) => (
  <ListItem paddingX="20px" fontSize="16px">
    <LinkBox>
      <Link href={menu.route} passHref>
        <LinkOverlay>
          <ListIcon as={menu.icon} color="white" marginRight="20px" />
          {menu.name}
        </LinkOverlay>
      </Link>
    </LinkBox>
  </ListItem>
)

export default MenuItem
