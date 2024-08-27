import { Box, Heading, Text } from "@chakra-ui/react"

const PricingTop = () =>{
    return <Box as="section" pt="5rem" pb="12rem" bg="#744ffa" color="white" w="100%" fontFamily="inter" >
        <Heading mb="12px" fontSize="35px" fontWeight="600" >
        Simple pricing for your business
        </Heading>
        <Text fontSize="20px" p="8px" fontWeight="480" >Plans that are carefully crafted to suit your business.</Text>
    </Box>
}

export default PricingTop