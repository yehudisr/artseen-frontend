import Search from './Search';
import EventList from './EventList';
import Profile from './Profile'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function MainContainer(){


    return(
        <div className="main-container">
        <h1>MAIN CONTAINER</h1>
            <Search />
            <EventList />
            <Profile />
            <LoginForm />
            <SignupForm />
    
        </div>
    )
}

export default MainContainer;