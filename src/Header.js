import Navbar from "./NavBar";
import { Image } from "@chakra-ui/react";
import logo from "./logo1.png";

function Header({setLoggedIn, loggedIn}){
    return(
        <div className="App-header">
            <Image src={logo} />
            <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </div>
        
    )
}

export default Header;