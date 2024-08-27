import { Box, } from "@chakra-ui/react"
import HomeHeaders from "../components/home-headers"
import BurgerhomeContent from "../components/home-content"


const BurgerHome = () =>{
    return <Box bg="#04040a" width={"100%"} height={"100vh"} px="4rem" py="1rem" >
        <HomeHeaders/>
        <BurgerhomeContent />
    </Box>
}

export default BurgerHome