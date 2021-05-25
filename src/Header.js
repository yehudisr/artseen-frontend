import Navbar from "./NavBar";

function Header({setLoggedIn, loggedIn}){
    return(
        <div className="App-header">
            <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </div>
        
    )
}

export default Header;