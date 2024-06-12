import UserGreeting from './UserGreeting.jsx'

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true}
                    username ="Username"/>
    </>
  )
}

export default App