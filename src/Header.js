import Navbar from "./NavBar";
import { Image, Flex, Spacer } from "@chakra-ui/react";
import logo from "./logo2.png";

function Header({setLoggedIn, loggedIn}){
    return(
        <Flex className='App-header' direction='row'>
            <Image src={logo} /><Spacer/>
            <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </Flex>
        
    )
}

export default Header;