import { HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { MoneyBackIcon, NoMonthlySubIcon, NoSetupFeeIcon } from "../assets/icons";

interface props extends StackProps{
    icon: ElementType
}

const Feature = (prop: props)=>{
    const {icon, children,...rest} = prop
    return <HStack justifyContent={"center"} {...rest} p="4px" spacing={"24px"} ><Icon as={icon}></Icon><Text fontWeight={"540"}  fontSize={"16px"} lineHeight={"24px"} textAlign={"left"} w="220px" wordBreak={"break-word"} >{children}</Text></HStack>
}
const PricingFeatures = ()=>{

    return <HStack spacing={"25px"} align={"center"} justifyContent={"center"} margin={"auto"} mt="2rem" >
                <Feature icon={MoneyBackIcon} >30 days money back Guarantee</Feature>
                <Feature icon={NoSetupFeeIcon} >No setup fees
                100% hassle-free</Feature>
                <Feature icon={NoMonthlySubIcon} >No monthly subscription
                Pay once and for all</Feature>
            </HStack>
}

export default PricingFeatures