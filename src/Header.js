import Navbar from "./NavBar";

function Header({setLoggedIn, loggedIn}){
    return(
        <div className="App-header">
            <h1>ARTSEEN</h1>
            <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </div>
        
    )
}

export default Header;