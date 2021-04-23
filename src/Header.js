import Navbar from "./NavBar";
import {  Image }  from "@chakra-ui/react";

function Header({setLoggedIn, loggedIn}){
    return(
        <div className="App-header">
           <Image src='logo.png'/>
            <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </div>
        
    )
}

export default Header;