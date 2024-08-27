import { Flex, Heading, Text, Button, VStack, Icon, HStack, StackProps } from "@chakra-ui/react"
import { ElementType } from "react"
import { CheckIcon } from "../assets/icons"
interface ListItemProp extends StackProps{
    icon: ElementType
}
const ListItem = (prop: ListItemProp) =>{
    const {icon, children, ...rest} = prop
    return <HStack  textAlign="left" as="li" {...rest} spacing="24px"><Icon as={icon} ></Icon><Text w={"220px"} wordBreak={"break-word"} >{children}</Text></HStack>
}

const PriceFloat = () =>{
    return <Flex borderRadius={"0.75rem"} fontFamily={"sans-serif"} overflow={"hidden"} direction="row" w="70%" maxW={"993px"} h="336px" mt="-10rem" alignSelf={"center"} mx="auto" boxShadow={"0px 10px 10px -5px #cdc0ff"} >
        
        <VStack w="378px" h="336px" py="2rem" bg="#cdc0ff" color={"black"}  >
            <Heading as="h4" fontFamily="inter" fontWeight="800" fontSize="24px" lineHeight="32px" pb="16px" >Premium PRO</Heading>
            <Heading fontWeight="800" fontSize="60px" pb="8px" letterSpacing="-1px" >$329</Heading>
            <Text fontSize="18px" fontWeight="500" >billed just once</Text>
            <Button mt="24px" size="lg" w="282px" h="51px" colorScheme="purple" p="12px" >Get Started</Button>
        </VStack>
        <VStack as="ul" spacing={"16px"} p="2rem" align={"flex-start"} bg="white" py={"0.1rem"}  >
            <Text mt="2.4rem" align={"left"} >Access these features when you get this pricing package for your business.</Text>
            <ListItem icon={CheckIcon} >International calling and messaging API</ListItem>
            <ListItem icon={CheckIcon} >Additional phone numbers</ListItem>
            <ListItem icon={CheckIcon} >Automated messages via Zapier</ListItem>
            <ListItem icon={CheckIcon} >24/7 support and consulting</ListItem>
        </VStack>
    </Flex>
}

export default PriceFloat