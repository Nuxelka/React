import PropTypes from 'prop-types';

function UserGreeting(props){

    const WelcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>
    const LogInMsg = <h2 className="login-msg">Log In</h2>


    return(props.isLoggedIn ?   WelcomeMsg:
                                LogInMsg)
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting