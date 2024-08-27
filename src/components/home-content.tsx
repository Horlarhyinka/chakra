import { Heading, HStack, Image, VStack, Text, Button, Box } from "@chakra-ui/react"
import Burger from "../../public/Burger.png"

interface SubMenuProp{
    image: string
}

const SubMenu = (prop: SubMenuProp) =>{
    return <Box _hover={{bg: "#fcfcfc09"}} transition={"450ms"} borderRadius={"10px"} border={"1px solid #fcfcfc3b"} width={"120px"} >
        <Image src={prop.image} width={"fill"} />
    </Box>
}

const BurgerhomeContent = () =>{

    

    return <HStack>
        <VStack pt={"6rem"} align={"left"} >
            <VStack color={"white"} align={"left"} spacing={"24px"} p="0.2rem" >
                <Heading fontSize={"65px"} lineHeight={"60px"} wordBreak={"break-word"} maxW={"480px"}>The Ultimate Burger Haven</Heading>
                <Text wordBreak={"break-all"} maxW={"480px"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                <HStack spacing={"25px"} >
                    <Button colorScheme="orange" px="2.5rem" >Order Now</Button>
                    <Button background={"none"} px="2.5rem" _hover={{border: "1px solid orange", textColor: "orange"}} border={"1px solid #fcfcfcab"} textColor={"white"} transition={"600ms"} >View Menu</Button>
                </HStack>
            </VStack>
            <HStack py="2rem" >
                <SubMenu image={Burger} />
                <SubMenu image={Burger} />
                <SubMenu image={Burger} />
                <SubMenu image={Burger} />
            </HStack>
        </VStack>
        <Box bgGradient={'radial-gradient(#121212 0%, #080808 30%, black 70%)'} width={"50%"} maxWidth={"550px"} >
        <Image src={Burger} />
        </Box>
    </HStack>
}

export default BurgerhomeContent