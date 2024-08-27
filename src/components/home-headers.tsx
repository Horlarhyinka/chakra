import { Box, HStack, Text, Icon, useColorMode } from "@chakra-ui/react"
import { SearchIcon, BellIcon, MoonIcon } from "@chakra-ui/icons"
import { BurgerHomeLogoIcon } from "../assets/icons"


const HomeHeaders = () =>{
    const menuTextHoverStyle = {color: "orange", cursor: "pointer"}
    const menuIconHoverStyle = {borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.048)"}

    const {colorMode, toggleColorMode} = useColorMode()
    console.log({colorMode})
    return <HStack justify={"space-between"} boxSizing="border-box" p="12px" color={"white"} >
        <Box><Icon as={BurgerHomeLogoIcon} boxSize={'24PX'} ></Icon></Box>
        <HStack spacing={"3rem"} >
            <Text  _hover={menuTextHoverStyle} >Home</Text>
            <Text  _hover={menuTextHoverStyle} >Menu</Text>
            <Text  _hover={menuTextHoverStyle} >About</Text>
            <Text  _hover={menuTextHoverStyle}>Shop</Text>
        </HStack>
        <HStack spacing={"42px"} >
        <Icon _hover={menuIconHoverStyle} boxSize={"18px"} as={SearchIcon}></Icon>
        <Icon _hover={menuIconHoverStyle} boxSize={"18px"} as={BellIcon}></Icon>
        <Icon _hover={menuIconHoverStyle} boxSize={"18px"} as={MoonIcon} onClick={()=>{
            toggleColorMode()
        }} ></Icon>
        </HStack>
    </HStack>
}

export default HomeHeaders