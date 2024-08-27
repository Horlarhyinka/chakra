import { Box } from "@chakra-ui/react"
import PricingTop from "../components/pricing-top"
import PriceFloat from "../components/pricing-float"
import PricingFeatures from "../components/pricing-features"

const Pricing = () =>{
    return <Box w="100%" height="100vh" p="0px" alignItems="center" textAlign="center" >
        <PricingTop />
        <PriceFloat />
        <PricingFeatures />
    </Box>
}

export default Pricing